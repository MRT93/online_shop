import {Avatar, Grid, IconButton, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AddCircleOutline, Delete, RemoveCircleOutline} from "@mui/icons-material";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {useSelector , useDispatch} from "react-redux";
import {userActions} from "../store";


const CartItem = (props) => {

    const router = useRouter()

    const user = useSelector(state => state)
    const dispatch = useDispatch()

    const [numberInCart, setNumberInCart] = useState(1)
    const numbersInCartChangeHandler = (e) => {
        setNumberInCart(e.target.value)

    }

    const removeFromCart = () => {
        if (user?.username) {

            axios.put("/api/remove-to-cart", {
                userId: user?.userId, token: user?.token, productId: props._id
            }).then(_ => {
                dispatch(userActions.removeFromCart(props._id))

            })
        }

    }

    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"))


    return (
        <Grid pb={10} borderBottom={"1px solid rgba(33,33,33,.1)"} container item xs={12} justifyContent={"flex-start"}
              alignItems={"flex-start"} key={props._id}>
            <Grid container item xs={12}>
                <Grid className={"pointer"} container item xs={12} md={true} lg={6} alignItems={"center"}
                      gap={matchesMD ? 10 : 20} onClick={() => router.push("/products/" + props._id.toString())}>
                    <Grid item xs={"auto"}>
                        <Avatar src={props.image} width={matchesLG ? 50 : 90} height={matchesLG ? 50 : 90}
                                alt={props.title}/>
                    </Grid>
                    <Grid item xs>
                        <Typography variant={"h4"} fontSize={{xs: 14, lg: 18}} color={"#666"}>
                            {props.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={"auto"} lg={6} alignItems={"center"} gap={-20}
                      justifyContent={"flex-end"}>

                    <IconButton onClick={() => {
                        setNumberInCart((prevState) => +prevState + 1)
                    }}>
                        <AddCircleOutline color={"primary"} sx={{fontSize: {xs: 30, md: 30}}}/>
                    </IconButton>
                    <TextField onChange={numbersInCartChangeHandler} value={numberInCart} sx={{width: {xs: 40, md: 80}}}
                               color={"primary"} type={"number"} size={"small"} variant={"standard"}/>

                    {numberInCart != 1 ?
                        <IconButton onClick={() => {
                            setNumberInCart((prevState) => +prevState - 1)
                        }}>
                            <RemoveCircleOutline color={"primary"} sx={{fontSize: {xs: 30, md: 30}}}/>
                        </IconButton> :

                        <IconButton onClick={removeFromCart}>
                            <Delete color={"primary"} sx={{fontSize: {xs: 30, md: 30}}}/>
                        </IconButton>

                    }

                </Grid>
            </Grid>
        </Grid>
    )

}

export default CartItem