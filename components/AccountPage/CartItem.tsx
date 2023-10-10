import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Delete from "@mui/icons-material/Delete";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";

import React, {ChangeEvent, useState} from "react";
import {useAppDispatch, useAppSelector, userActions} from "@/store";
import Image from "next/image";

import type {ProductType} from "@/db/productModel";
import useFetch from "@/hooks/useFetch";
import {enqueueSnackbar} from "notistack";
import CircularProgress from "@mui/material/CircularProgress";


const CartItem: React.FC<ProductType> = ({title, slug, _id}) => {

    const [isLoading, setIsLoading] = useState(false);

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const [numberInCart, setNumberInCart] = useState(1)
    const numbersInCartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberInCart(Number(event.target.value))

    }

    const removeFromCart = async () => {
        if (user?.username) {
            try {
                setIsLoading(true)
                await useFetch.delete(`/api/user/cart?productId=${_id}&_id=${user._id}&token=${user.token}`)
                dispatch(userActions.removeFromCart(_id));
                enqueueSnackbar("از سبد خرید شما حذف شد", {
                    variant: "info",
                });
            } catch (err) {
                enqueueSnackbar("متاسفانه عملیات با خطا مواجه شد", {
                    variant: "error",
                })
            } finally {
                setIsLoading(true)
            }
        }
    }

    return (
        <Grid container bgcolor={"white.main"} p={"1rem"} borderRadius={"1rem"}>
            <Grid container item xs={12} md alignItems={"center"} gap={10} component={Link} href={`/products/${slug}`}>
                <Grid item xs={"auto"}>
                    <Image src={`/assets/pictures/products/${slug}.jpg`} width={50} height={50}
                           style={{borderRadius: "50%"}}
                           alt={title}/>
                </Grid>
                <Grid item xs component={Typography} variant={"h4"} fontSize={{xs: 12, md: 16}}>
                    {title}
                </Grid>
            </Grid>
            <Grid container item xs={12} md={"auto"} alignItems={"center"}
                  justifyContent={"flex-end"}>

                <IconButton onClick={() => {
                    setNumberInCart((prevState) => Number(prevState) + 1)
                }}>
                    <AddCircleOutline color={"primary"} sx={{fontSize: 25}}/>
                </IconButton>
                <TextField onChange={numbersInCartChangeHandler} value={numberInCart} sx={{width: {xs: 40, md: 80}}}
                           color={"primary"} type={"number"} size={"small"} variant={"standard"}/>

                {
                    numberInCart != 1 ?
                        <IconButton onClick={() => {
                            setNumberInCart((prevState) => Number(prevState) - 1)
                        }}>
                            <RemoveCircleOutline color={"primary"} sx={{fontSize: 25}}/>
                        </IconButton> :
                        <IconButton onClick={removeFromCart} disabled={isLoading}>
                            {
                                isLoading ?
                                    <CircularProgress color={"primary"} size={25}/> :
                                    <Delete color={"primary"} sx={{fontSize: 22}}/>
                            }
                        </IconButton>
                }
            </Grid>
        </Grid>
    )
}

export default CartItem