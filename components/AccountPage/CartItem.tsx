import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Delete from "@mui/icons-material/Delete";
import RemoveCircleOutline from "@mui/icons-material/RemoveCircleOutline";
import React, {ChangeEvent, useState} from "react";
import {useAppDispatch, userActions} from "@/store";
import Image from "next/image";
import type {ProductType} from "@/db/productModel";
import CircularProgress from "@mui/material/CircularProgress";
import {useRouter} from "next/navigation";

function CartItem (product : ProductType)  {

    const [addToCartLoading, setAddToCartLoading] = useState(false);
    const router = useRouter();

    const dispatch = useAppDispatch();

    const [numberInCart, setNumberInCart] = useState(1);
    const numbersInCartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNumberInCart(Number(event.target.value));
    }

    const cartHandler = () => {
        dispatch(userActions.handleCart({product, setAddToCartLoading, router}));
    }

    return (
        <Grid container bgcolor={"white.main"} p={"1rem"} borderRadius={1}>
            <Grid container item xs={12} md alignItems={"center"} gap={10} component={Link} href={`/products/${product.slug}`}>
                <Grid item xs={"auto"}>
                    <Image src={`/assets/pictures/products/${product.slug}.jpg`} width={50} height={50}
                           style={{borderRadius: "50%"}}
                           alt={product.title}/>
                </Grid>
                <Grid item xs component={Typography} variant={"h4"} fontSize={{xs: 12, md: 16}}>
                    {product.title}
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
                        <IconButton onClick={cartHandler} disabled={addToCartLoading}>
                            {
                                addToCartLoading ?
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