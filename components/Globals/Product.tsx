import CircularProgress from "@mui/material/CircularProgress";
import type {ProductType} from "@/db/productModel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery"
import Image from "next/legacy/image"
import Favorite from "@mui/icons-material/Favorite";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {useTheme} from "@mui/material/styles"
import {userActions, useAppDispatch, useAppSelector} from "@/store";
import Link from "next/link"
import type {SxProps} from "@mui/system";

const styles : Record<string, SxProps> = {
    product: {
        borderRadius: 1,
        justifyContent: "center",
        p: {xs: 7, md: 10},
        bgcolor: "#fff",

    },
    addToWishlistButton: {
        position: "absolute",
        left: {xs: 1, sm: 3},
        top: {xs: 1, sm: 3},
        zIndex: 20,

    }
}


const Product: React.FC<ProductType> = (props) => {
    const router = useRouter()

    const theme = useTheme()
    const matchesMD: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM: boolean = useMediaQuery(theme.breakpoints.down("sm"))

    const [addToWishlistLoading, setAddToWishlistLoading] = useState(false)

    const dispatch = useAppDispatch();

    const  user = useAppSelector(state => state.userReducer);
    const isInWishlist = user?.wishlist.includes( props._id );
    const addToWishlistHandler = () => {
        dispatch(userActions.handleWishlist({product : props , router , setAddToWishlistLoading }))
    }


    return (
        <Grid container item sx={styles.product} xs={12}>
            <Grid item xs={12} sx={{position: "relative", cursor: "pointer"}}>
                <Grid item sx={styles.addToWishlistButton}>
                    <IconButton onClick={addToWishlistHandler} aria-label="add to wishlist">
                        {addToWishlistLoading ? <CircularProgress size={matchesMD ? matchesSM ? 30 : 40 : 40} sx={{
                            borderRadius: 20,
                            p: {xs: 4, md: 5,},
                            bgcolor: "rgba(50,50,50,0.3)",
                            color: "#fff"
                        }}/> : isInWishlist ? <Favorite sx={{
                                fontSize: {xs: 30, sm: 40},
                                borderRadius: 20,
                                p: {xs: 4, md: 5,},
                                bgcolor: "rgba(50,50,50,0.3)",
                                color: "primary.main"
                            }}/> :
                            <Favorite sx={{
                                fontSize: {xs: 30, sm: 40,},
                                borderRadius: 20,
                                p: {xs: 4, md: 5,},
                                bgcolor: "rgba(50,50,50,0.3)",
                                color: "#fff"
                            }}/>
                        }
                    </IconButton>
                </Grid>

                <Link href={`/products/${props.slug}`}>
                    <Image src={`/assets/pictures/products/${props.slug}.jpg`}
                           alt={`${props.title}`} width={400} height={400}
                           className={"pointer"}/>
                </Link>
            </Grid>
            <Grid container item height={50} alignItems={"center"} xs={12}>
                <Typography variant={"h4"} component={Link} href={`/products/${props.slug}`}
                            fontSize={{xs: 11, md: 14, lg: 15}} fontFamily={"dana-bold"}
                            className={"pointer"} lineHeight={1.5}>{props.title}</Typography>

            </Grid>
            <Grid container item alignItems={"center"} height={50}>
                <Typography variant={"h4"} component={"span"}
                            sx={{fontSize: {xs: 11, md: 14, lg: 15} , color : "primary.main"}}>
                    {props.price + " تومان هر متر مربع"}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default React.memo(Product)