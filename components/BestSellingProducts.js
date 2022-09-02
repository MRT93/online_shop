import {Grid} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation} from 'swiper';

import Product from "./Product";
import axios from "axios"

import {useEffect, useState} from "react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const styles = {}


const BestSellingProducts = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [bestSellingProducts, setBestSellingProducts] = useState([])

    useEffect(() => {
        setIsLoading(true)
        axios.post("/api/products", {sortBy: 2}).then(res => {
            setBestSellingProducts(res.data.relatedProducts)
            console.log(res.data)
            setIsLoading(false)
            }
        ).catch(err => {
            setIsLoading(false)
            console.log(err)
        })


    }, [])

    return (
        <Grid container item xs={11} alignItems={"center"}>
            {isLoading && <p>Loading...</p>}
            {!isLoading &&
                <Swiper spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation, A11y]}
                        navigation

                >
                    {bestSellingProducts.map((product) =>
                        <SwiperSlide key={product._id}>
                            <Product {...product} />
                        </SwiperSlide>)}
                </Swiper>
            }
        </Grid>
    )

}

export default BestSellingProducts