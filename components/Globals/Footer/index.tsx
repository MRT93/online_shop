import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import type {SxProps} from "@mui/system";

const styles = {
    linkBullets : {
        fontSize: 5,
        color: "#555"
    },
    footerLink: {
        fontSize: 14,
        color: "#555",
        transition: "color .4s",

        "&:hover": {
            color: "primary.main"
        }
    },
    loginField: {
        width: 1,
        bgcolor: "#fff",
    },
    socialMediaIcons: {
        fontSize: {xs: 30, md: 40},
    },
    downloadButton: {
        fontSize: 12,
        fontWeight: 700,
        gap: 10,
        alignItems: "center",
        color: "#000",
        border: "1px solid #000",
        transition: "all .5s",

        "&:hover": {
            filter: "invert(32%) sepia(64%) saturate(541%) hue-rotate(107deg) brightness(94%) contrast(102%)"
        },


    }
} satisfies Record<string, SxProps>

const Footer: React.FC = () => {

    return (
        <Grid container component={"footer"} justifyContent={{xs: "center", md: "space-between"}}
              mt={30}>
            <Grid container item direction={"column"} xs={6} md={2} spacing={10}>
                <Grid item mb={10}>
                    <Typography variant={"h5"} fontSize={18} fontFamily={"dana-bold"}>فروشگاه دیوال</Typography>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>پوستر سفارشی</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/collaboration"} sx={styles.footerLink}>همکاری با ما</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>تماس با ما</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/about"} sx={styles.footerLink}>درباره ما</Grid>
                </Grid>
            </Grid>
            <Grid container item direction={"column"} xs={6} md={3} lg={2} spacing={10}>
                <Grid item mb={10}>
                    <Typography variant={"h5"} fontSize={18} fontFamily={"dana-bold"}>خدمات دیوال</Typography>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>مشاوره رایگان</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>دیدن آلبوم ها در منزل</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}> برآورد هزینه</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10} xs={"auto"}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>اجرای کار توسط متخصصین</Grid>
                </Grid>
            </Grid>
            <Grid container item xs={2} direction={"column"} display={{xs: "none", lg: "flex"}} spacing={10}>
                <Grid item mb={10}>
                    <Typography variant={"h5"} fontSize={18} fontFamily={"dana-bold"}>
                        خدمات مشتریان
                    </Typography>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>پرسش های متداول</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>تحویل و ارسال کالا</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>سیاست حفظ حریم خصوصی</Grid>
                </Grid>
                <Grid item container alignItems={"center"} gap={10}>
                    <CircleIcon sx={styles.linkBullets}/>
                    <Grid component={Link} href={"/cloths"} sx={styles.footerLink}>شرایط و قوانین</Grid>
                </Grid>
            </Grid>

            {/********************************************************************************/}

            <Grid container item xs={12} md={5} lg={4} alignItems={"center"} my={{xs: 30, md: 0}}>
                <Typography variant={"h5"} fontSize={{xs: 14, md: 18}} fontFamily={"dana-bold"}>
                    دیوال را دنبال کنید
                </Typography>

                <Grid item container justifyContent={{xs: "flex-end", md: "flex-start"}} alignItems={"center"} xs
                      md={12}>
                    <IconButton component={"a"} href={"https://telegram.org/"} aria-label="telegram">
                        <TelegramIcon color={"primary"} sx={styles.socialMediaIcons}/>
                    </IconButton>
                    <IconButton component={"a"} href={"https://twitter.com/?lang=en"} aria-label="twitter">
                        <TwitterIcon color={"primary"} sx={styles.socialMediaIcons}/>
                    </IconButton>
                    <IconButton component={"a"} href={"https://www.instagram.com/"} aria-label="instagram">
                        <InstagramIcon color={"primary"} sx={styles.socialMediaIcons}/>
                    </IconButton>
                    <IconButton component={"a"} href={"https://www.linkedin.com/"} aria-label="linkedin">
                        <LinkedInIcon color={"primary"} sx={styles.socialMediaIcons}/>
                    </IconButton>
                </Grid>
                <Grid item container mt={30} xs={12}>
                    <Typography variant={"h4"} fontSize={{xs: 16, md: 18}}>
                         از جدیدترین تخفیفات
                        &nbsp;
                        <Grid component={"span"} sx={{ fontFamily: "dana-black",color: "primary.main"}}>
                            دیوال
                        </Grid>
                        &nbsp;
                        با خبر شوید!
                    </Typography>
                </Grid>
                <Grid item container alignItems={"center"} gap={5} mt={15} xs={12}>
                    <Grid item xs sm={6} md>
                        <TextField sx={styles.loginField} type={"email"} placeholder={"ایمیل خود را وارد کنید"}/>
                    </Grid>
                    <Grid item xs={"auto"}>
                        <Button variant={"contained"} sx={{height: 55, fontSize: 16, borderRadius: 1}}>عضویت</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item alignItems={"center"} justifyContent={"space-between"} my={40} xs={12}
                  display={{xs: "none", md: "flex"}}>
                <Grid container item direction={"column"} xs={"auto"} gap={10}>
                    <Typography variant={"h4"} fontFamily={"dana-black"} component={"pre"}>
                        الو
                        &nbsp;
                         <Grid component={"span"} sx={{color: "primary.main"}}>
                            دیوال
                        </Grid>

                    </Typography>
                    <Typography variant={"h5"} component={"p"}>
                        24 ساعت در هفت روز هفته آماده خدمت رسانی به مشتریان هستیم
                    </Typography>

                </Grid>
                <Grid container item xs={"auto"} justifyContent={"flex-end"}>
                    <Grid container direction={"column"} item xs={true}>
                        <Typography fontSize={18} fontFamily={"dana-bold"} variant={"caption"}>
                            021464879
                        </Typography>
                        <Typography fontSize={12} variant={"caption"}>
                            پشتیبانی مشتریان
                        </Typography>
                    </Grid>
                    <Grid item container alignItems={"center"} xs={"auto"}>
                        <PhoneIcon sx={{fontSize: 35}} color={"primary"}/>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container item justifyContent={"space-between"} alignItems={"center"} spacing={{xs: 0, lg: 50}}>
                <Grid container item gap={10} xs={12} lg>
                    <Typography variant={"h4"} fontFamily={"dana-black"} fontSize={{xs: 16, md: 20}}>
                        فروشگاه اینترنتی
                        &nbsp;
                        <Grid component={"span"} sx={{color: "primary.main"}}>
                             دیوال
                        </Grid>
                    </Typography>
                    <Typography variant={"h5"} component={"p"} lineHeight={1.5}
                                fontSize={{xs: 14, md: 16}}>
                        پوستر دیواری الگوی بسیار مناسبی از یک متریال ایده آل و
                        پرکاربرد در
                        دکوراسیون
                        داخلی بوده که توانسته با
                        طیف وسیعی از طرح ها و رنگ های متنوع امروزه به عنوان یکی از محصولات پر طرفدار در امر تزئینات
                        دکوراسیون داخلی قرار گیرد. برترین ویژگی پوستر کاغذ دیواری انعطاف در چاپ طرح های خاص و بر
                        آورده
                        کردن
                        خواسته ها و هماهنگی با رنگ و آیتم های استفاده شده در دکوراسیون داخلی می باشد. پوستر دیواری
                        توانسته
                        با طرح های متنوع میزبان خوبی برای خانه های ما باشد تصاویری که برگرفته از پوستر های دیواری سه
                        بعدی ،
                        پوستر های دیواری مدرن ، پوستر های دیواری برای کسب و کار های مختلف مانند فست فود ، رستوران ،
                        مزون
                        و
                        آرایشگاه ها و مواردی از این جمله باشد. با انتخاب طرح ها در ابعاد مختلف و مقایسه قیمت ،
                        امکانی
                        برای
                        خرید برای شما فراهم می گردد تا ما بتوانیم خدمت ویژه خود را برای شما عزیزان فراهم کنیم.
                    </Typography>
                </Grid>
                <Grid container justifyContent={"center"} item xs={12} lg={"auto"}>
                    <Image src={"/assets/pictures/enamad.png"} alt={"نماد اعتماد الکترونیکی"} width={150}
                           height={150} className="cover"/>
                    <Image src={"/assets/pictures/national-digital-media-badge.png"}
                           alt={"نشان ملی ثبت رسانه های دیجیتال"} width={150} height={150} className="cover"/>
                </Grid>
            </Grid>

            {/*****************************************************************************************/}

            <Divider sx={{width: 1, bgcolor: "#ddd", mt: 20}}/>

            <Grid container item xs={12} my={40} alignItems={"center"} justifyContent={"space-between"}>
                <Grid container item gap={20} xs={12} md={"auto"} display={{xs: "none", lg: "flex"}}>
                    <Grid component={Link} href={"/collaboration"} sx={styles.footerLink}>
                        همکاری با ما
                    </Grid>
                    <Grid component={Link} href={"/"} sx={styles.footerLink}>
                        سفارش پوستر اختصاصی
                    </Grid>
                    <Grid component={Link} href={"/"} sx={styles.footerLink}>
                        نمونه کارها
                    </Grid>
                    <Grid component={Link} href={"/"} sx={styles.footerLink}>
                        راهنمای استفاده
                    </Grid>
                </Grid>

                <Grid container item xs={12} lg={"auto"} gap={{xs: 20, md: 10}} justifyContent={"space-between"}
                      alignItems={"center"}>
                    <Grid item xs={12} md={"auto"}>

                        <Typography variant={"h5"}>
                            دانلود اپلیکیشن دیوال :
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} md={"auto"} gap={10}
                          justifyContent={{xs: "center", md: "flex-start"}}>

                        <Button size={"large"} sx={styles.downloadButton} variant={"outlined"}
                                endIcon={<svg width={15} height={15} viewBox="0 0 32 32"
                                              xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.331 14.644l-13.794-13.831 17.55 10.075zM2.938 0c-0.813 0.425-1.356 1.2-1.356 2.206v27.581c0 1.006 0.544 1.781 1.356 2.206l16.038-16zM29.512 14.1l-3.681-2.131-4.106 4.031 4.106 4.031 3.756-2.131c1.125-0.893 1.125-2.906-0.075-3.8zM6.538 31.188l17.55-10.075-3.756-3.756z"/>
                                </svg>}>
                            <Grid component={"span"} position={"relative"} top={2}>

                                google play
                            </Grid>
                        </Button>
                        <Button size={"large"} sx={styles.downloadButton} variant={"outlined"}
                                endIcon={<svg width={15} height={15} version="1.1" id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                              viewBox="0 0 305 305">
                                    <g id="XMLID_228_">
                                        <path id="XMLID_229_" d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305
		c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305
		c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941
		c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078
		c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152
		c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813
		c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097
		c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008
		C78.894,73.643,54.298,88.535,40.738,112.119z"/>
                                        <path id="XMLID_230_" d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379
		c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257
		c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z"/>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                }>
                            <Grid component={"span"} position={"relative"} top={2}>apple store</Grid>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Divider sx={{width: 1, bgcolor: "#ddd"}}/>

            <Grid container item justifyContent={"center"} alignItems={"center"} my={20} component={Typography}
                  variant={"h6"} textAlign={"center"} fontSize={{xs: 12, md: 14}}>
                تمامی حقوق مادی و معنوی این سایت متعلق به دیوال می باشد و هر گونه کپی برداری پیگرد قانونی خواهد
                داشت
                .
            </Grid>


        </Grid>
    )
}

export default Footer