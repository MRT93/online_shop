"use client"
import {useSearchParams} from "next/navigation";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {useEffect, useState} from "react";
import TabPanel from "@/components/Globals/TabPanel";
import {useAppSelector} from "@/store";
import dynamic from "next/dynamic";
import type {SxProps} from "@mui/material/styles";
import Favorite from "@mui/icons-material/Favorite";
import Person from "@mui/icons-material/Person";
import ShoppingBag from "@mui/icons-material/ShoppingBag";

// import Moderation from "@/components/AccountPage/Moderation";

const Profile = dynamic(() => import("@/components/AccountPage/Profile"));
const AddProduct = dynamic(() => import("@/components/AccountPage/AddProduct"));
const Wishlist = dynamic(() => import("@/components/AccountPage/Wishlist"));
const Cart = dynamic(() => import("@/components/AccountPage/Cart"));

const styles = {
    tab: {
        fontSize: {xs: 12, md: 14},
        color: "#555",
        gap: "1rem"
    },
    tabsContainer: {
        bgcolor: "white.main",
        borderRadius: 1,
        fontFamily: "dana-bold",
    }
} satisfies Record<string, SxProps>


function AccountPage() {

    const query = useSearchParams();

    const user = useAppSelector(state => state.user);

    const [tab, setTab] = useState(1);

    const queryTab = query.get("tab");

    const tabChangeHandler = (_, newTab: number) => {
        setTab(newTab);
    }

    useEffect(() => {
        if (queryTab) {
            setTab(Number(queryTab));
        }
    }, [queryTab])


    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

    return (
            <Grid container columns={14} gap={10}>
                <Grid item xs={14} md={3} sx={styles.tabsContainer}>
                    <Tabs onChange={tabChangeHandler} value={tab}
                          orientation={matchesMD ? "vertical" : "horizontal"}>
                        <Tab icon={<Person/>} iconPosition={matchesMD ? "start" : "top"} label="اطلاعات کاربر"
                             sx={styles.tab}/>
                        <Tab icon={<Favorite/>} iconPosition={matchesMD ? "start" : "top"} label="لیست علاقمندی ها"
                             sx={styles.tab}/>
                        <Tab icon={<ShoppingBag/>} iconPosition={matchesMD ? "start" : "top"} label="سبد خرید"
                             sx={styles.tab}/>
                        {user.role === "admin" && <Tab label="افزودن محصول" sx={styles.tab}/>}
                        {/*{user.role === "admin" && <Tab label="بررسی دیدگاه ها" value={5} sx={styles.tab}/>}*/}
                    </Tabs>

                </Grid>
                <Grid item xs={14} md minHeight={300}>

                    <TabPanel tab={tab} index={0}>
                        <Profile {...user}/>
                    </TabPanel>

                    <TabPanel tab={tab} index={1}>
                        <Wishlist {...user}/>
                    </TabPanel>

                    <TabPanel tab={tab} index={2}>
                        <Cart {...user}/>
                    </TabPanel>

                    {user.role === "admin" &&
                        <>
                            <TabPanel tab={tab} index={3}>
                                <AddProduct/>
                            </TabPanel>
                            {/*<TabPanel tab={tab} index={4}>
                                <Moderation/>
                            </TabPanel>*/}
                        </>
                    }
                </Grid>
            </Grid>
    )
}

export default AccountPage