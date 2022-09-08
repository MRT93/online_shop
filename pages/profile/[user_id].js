import {useRouter} from "next/router";
import {Box, Button, Grid, Tab, Tabs, Typography} from "@mui/material";
import TabPanel from '@mui/lab/TabPanel';
import {useContext, useEffect, useState} from "react";
import {TabContext} from "@mui/lab";
import authContext from "../../store/auth-context";
import SectionHeading from "../../components/SectionHeading";
import Product from "../../components/Product";
import axios from "axios";

const styles = {
    tab: {
        fontSize: 16,
        color: "#333",
        fontFamily: "dana-demibold",
        my: 10,
        // bgcolor:"primary"
    }
}


const Profile = () => {
    const router = useRouter()
    const authCtx = useContext(authContext)
    // console.log(router)
    // const [isLoading,setIsLoading] = useState(false)
    const [favoriteList, setFavoriteList] = useState([])

    const [tab, setTab] = useState("1");


    const tabChangeHandler = (_, newTab) => {
        setTab(newTab);
        router.push({pathname: router.pathname, query: {...router.query, tab: newTab}})
    };

    const queryTab = router.query.tab

    useEffect(() => {
        if (router.query.tab) {
            setTab(router.query.tab.toString())

        } else router.isReady && router.push({pathname: router.pathname, query: {...router.query, tab: 1}})

    }, [queryTab])

    const currentUserFavoriteList = authCtx.user.favoriteList

    useEffect(() => {

            if (authCtx.isAuthenticated) {

                axios.post("/api/get-favorite-list", {
                    userId: authCtx.user?.userId,
                    token: authCtx.user?.token
                }).then(res => {
                    // console.log(res)
                    // authCtx.login(res.data.user)
                    setFavoriteList(res.data.user.favoriteList)

                })
            }
        }
        , [currentUserFavoriteList])


    // const [tab, setTab] = useState(1);
    //
    // const handleChange = (event, tab) => {
    //     if (tab !== null)
    //         setTab(tab);
    // };

    return (

        <Grid container item xs={12} minHeight={400}>
            <TabContext value={tab}>
                <Grid container item xs={2} borderLeft={"5px solid #069f69"}>

                    <Tabs onChange={tabChangeHandler} value={tab} orientation={"vertical"}>
                        <Tab label="اطلاعات کاربر" value="1" sx={styles.tab}/>
                        <Tab label="لیست علاقمندی ها" value="2" sx={styles.tab}/>
                        <Tab label="سبد خرید" value="3" sx={styles.tab}/>
                    </Tabs>

                </Grid>
                <Grid container item xs={10}>
                    <TabPanel value="1" sx={{width: 1}}>
                        <Grid container item xs={12} py={20} px={40} direction={"column"} gap={40}>
                            <Grid container item xs={3} alignItems={"center"} gap={10}>
                                <Box component={"span"} sx={{fontSize: 20}}>نام و نام خانوادگی : </Box>
                                <Typography variant={"subtitle1"} fontFamily={"dana-demibold"} fontSize={16}>
                                    مشخص نشده !
                                </Typography>
                                <Button variant={"outlined"} sx={{fontSize: 16}}>تغییر</Button>

                            </Grid>
                            <Grid container item xs={3} alignItems={"center"} gap={20}>
                                <Box component={"span"} sx={{fontSize: 20}}>نام کاربری : </Box>
                                <Typography variant={"subtitle1"} fontFamily={"dana-demibold"} fontSize={20}>
                                    {authCtx.user?.username}
                                </Typography>
                                <Button variant={"outlined"} sx={{fontSize: 16}}>تغییر</Button>
                            </Grid>
                            <Grid container item xs={3} alignItems={"center"} gap={20}>
                                <Box component={"span"} sx={{fontSize: 20}}>ایمیل : </Box>
                                <Typography variant={"subtitle1"} fontFamily={"dana-demibold"} fontSize={20}>
                                    {authCtx.user?.email}
                                </Typography>
                                <Button variant={"outlined"} sx={{fontSize: 16}}>تغییر</Button>

                            </Grid>
                            <Grid container item xs={3} alignItems={"center"} gap={10}>
                                <Box component={"span"} sx={{fontSize: 20}}>شماره موبایل : </Box>
                                <Typography variant={"subtitle1"} fontFamily={"dana-demibold"} fontSize={16}>
                                    مشخص نشده !
                                </Typography>
                                <Button variant={"outlined"} sx={{fontSize: 16}}>تغییر</Button>

                            </Grid>
                            <Grid container item xs={3} alignItems={"center"} gap={10}>
                                <Box component={"span"} sx={{fontSize: 20}}> تاریخ تولد : </Box>
                                <Typography variant={"subtitle1"} fontFamily={"dana-demibold"} fontSize={16}>
                                    مشخص نشده !
                                </Typography>
                                <Button variant={"outlined"} sx={{fontSize: 16}}>تغییر</Button>

                            </Grid>
                            <Grid container item xs={3} alignItems={"center"} gap={10}>
                                <Box component={"span"} sx={{fontSize: 20}}> شغل : </Box>
                                <Typography variant={"subtitle1"} fontFamily={"dana-demibold"} fontSize={16}>
                                    مشخص نشده !
                                </Typography>
                                <Button variant={"outlined"} sx={{fontSize: 16}}>تغییر</Button>

                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2" sx={{width: 1}}>
                        <Grid container item xs={12} py={20} px={40} spacing={20}>
                            <SectionHeading text={"لیست کالاهای مورد علاقه شما"}/>

                            {!favoriteList || favoriteList?.length === 0 ?
                                <Grid container item xs minHeight={300} justifyContent={"center"} alignItems={"center"}>
                                    <Typography fontSize={20} variant={"body1"} color={"#333"}
                                                fontFamily={"dana-demibold"}>لیست علاقمندی های شما خالی است
                                        !</Typography>
                                </Grid> :

                                favoriteList.map(item =>
                                    <Grid item xs={4} key={item._id}>
                                        <Product  {...item} />
                                    </Grid>
                                )
                            }
                        </Grid>
                    </TabPanel>
                    <TabPanel value="3" sx={{width: 1}}>Item Three</TabPanel>
                </Grid>

                {/*<ToggleButtonGroup
                    sx={{gap: 10}}
                    size={"large"}
                    fullWidth
                    color={"primary"}
                    orientation="vertical"
                    value={tab}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value={1} sx={{ height: 40, fontSize: "1.6rem"}}>
                        salam
                    </ToggleButton>
                    <ToggleButton value={2}  sx={{ height: 40, fontSize: "1.6rem"}}>
                        salam
                    </ToggleButton>
                    <ToggleButton value={3}  sx={{ height: 40, fontSize: "1.6rem"}}>
                        salam
                    </ToggleButton>
                </ToggleButtonGroup>*/}
            </TabContext>


        </Grid>
    )
}

export default Profile