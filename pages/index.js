import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import {Fragment} from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import {Grid} from "@mui/material";
import SeenOn from "../components/SeenOn";
import Places from "../components/Places";
import Footer from "../components/Footer";
import LatestProducts from "../components/LatestProducts";
import SectionHeading from "../components/SectionHeading";
import BestSoldProducts from "../components/BestSoldProducts";


const Home = () => {

  return(
      <Grid container direction={"row"} justifyContent={"center"}>

      <Head>
        <title> دیوال : فروشگاه پوستر و کاغذ دیواری </title>
      </Head>
          {/*<Header />*/}
          {/*<Hero />*/}
          {/*<Features />*/}
          {/*<Places />*/}
          <SectionHeading text={"محصولات جدید"} />
          <LatestProducts />
          <SectionHeading text={"پر فروش ترین محصولات"} />
          <BestSoldProducts />
          {/*<SeenOn />*/}
          {/*<Footer />*/}

      </Grid>
  )
}

export default Home