import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import Circle from "@mui/icons-material/Circle";
import {useRouter} from "next/router";
import React from "react";
import type {SxProps} from "@mui/system";

const styles    = {
    place: {
        transition: "all .4s",
        cursor: "pointer",
        border: "1px solid rgba(44,44,44,.3)",
        p: "2rem",
        "&:hover": {
            filter: "invert(32%) sepia(64%) saturate(541%) hue-rotate(107deg) brightness(94%) contrast(102%)"

        }
    },
    place_name: {
        fontSize: 16

    }
} satisfies Record<string, SxProps>


const Places: React.FC = () => {
    const router = useRouter();
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))


    return (
        <Grid container item component={"section"} my={80} gap={{xs: 50, md: 80}} xs={12}>
            <Grid container item alignItems={"center"} justifyContent={"center"} gap={10} xs={12}>
                <Circle color={"primary"} sx={{fontSize: {xs: 20, md: 30}}}/>
                <Typography variant={"h2"} color={"#555"} fontFamily={"dana-black"} sx={{fontSize: {xs: 20, md: 30}}}>
                    <Box component={"span"} sx={{color: "primary.main"}}>برای کجا</Box> می خواهید ؟
                </Typography>
            </Grid>
            <Grid container item xs={12} alignItems={"center"} justifyContent={"space-between"} bgcolor={"#fff"}>
                <Grid container item direction={"column"} xs={6} md={4} lg={2} alignItems={"center"} gap={20}
                      sx={styles.place} onClick={() => {
                    router.push("/products?category=child_room_poster")
                }}>
                    <svg width={matchesMD ? 40 : 70} height={matchesMD ? 40 : 70} viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--ci-primary-color, currentColor)"
                              d="M425.39,200.035A184.3,184.3,0,0,0,290.812,91.289L317.568,48.48,290.432,31.52,255.127,88.008A184.046,184.046,0,0,0,86.61,200.035a71.978,71.978,0,0,0,0,143.93,184.071,184.071,0,0,0,338.78,0,71.978,71.978,0,0,0,0-143.93Zm27.152,99.975a39.77,39.77,0,0,1-27.76,11.961l-20.725.394-8.113,19.074a152.066,152.066,0,0,1-279.887,0l-8.114-19.074-20.725-.394a39.978,39.978,0,0,1,0-79.942l20.725-.394,8.114-19.074a152.067,152.067,0,0,1,279.887,0l8.113,19.074,20.725.394a39.974,39.974,0,0,1,27.76,67.981Z"
                              className="ci-primary"/>
                        <rect width="40" height="40" x="168" y="232" fill="var(--ci-primary-color, currentColor)"
                              className="ci-primary"/>
                        <rect width="40" height="40" x="304" y="232" fill="var(--ci-primary-color, currentColor)"
                              className="ci-primary"/>
                        <path fill="var(--ci-primary-color, currentColor)"
                              d="M256,384a80,80,0,0,0,80-80H176A80,80,0,0,0,256,384Z" className="ci-primary"/>
                    </svg>

                    <Typography variant={"h3"} sx={styles.place_name} fontFamily={"dana-bold"}>اتاق کودک</Typography>
                </Grid>
                <Grid container item direction={"column"} xs={6} md={4} lg={2} alignItems={"center"} gap={20}
                      sx={styles.place} onClick={() => {
                    router.push("/products?category=office_poster")
                }}>
                    <svg width={matchesMD ? 40 : 70} height={matchesMD ? 40 : 70} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 279.334 279.334">
                        <g>
                            <path
                                d="m232.423,101.03h-20.497c-3.313,0-6,2.687-6,6s2.687,6 6,6h4.429v31.517l-13.396,7.135c-3.289-4.313-8.479-7.053-14.139-7.053h-32.76v-16.088h20.107c5.563,0 10.744-2.214 14.59-6.233s5.828-9.294 5.582-14.851l-3.899-88.157c-0.48-10.822-9.34-19.3-20.173-19.3h-63.08c-10.833,0-19.694,8.478-20.173,19.3l-3.899,88.156c-0.246,5.557 1.736,10.832 5.582,14.851s9.027,6.233 14.59,6.233h20.107v16.088h-34.799c-5.838,0-11.108,2.846-14.366,7.325l-1.478-.787-11.771-6.269v-22.323-9.193h4.429c3.313,0 6-2.687 6-6s-2.687-6-6-6h-20.498c-3.313,0-6,2.687-6,6s2.687,6 6,6h4.068v35.119c0,2.217 1.223,4.253 3.18,5.296l18.172,9.678-.839,4.529c-0.965,5.205 0.422,10.523 3.807,14.593s8.361,6.404 13.655,6.404h33.159v11.667c0,3.313 2.687,6 6,6h6.712c-0.061,0.344-0.099,0.695-0.099,1.056v14.823c-23.277,0.46-46.396,3.589-68.808,9.333-2.654,0.68-4.511,3.076-4.511,5.816v12.942c-5.265,2.317-8.954,7.576-8.954,13.688 0,8.246 6.708,14.954 14.954,14.954 8.245,0 14.953-6.708 14.953-14.954 0-6.111-3.689-11.37-8.953-13.687v-8.251c20.025-4.786 40.604-7.411 61.318-7.837v16.171c-5.234,2.33-8.897,7.571-8.897,13.66 0,8.246 6.708,14.954 14.953,14.954 8.246,0 14.954-6.708 14.954-14.954 0-6.133-3.715-11.41-9.01-13.714v-16.117c20.713,0.426 41.29,3.051 61.317,7.837v8.251c-5.264,2.317-8.953,7.576-8.953,13.687 0,8.246 6.708,14.954 14.954,14.954 8.245,0 14.953-6.708 14.953-14.954 0-6.112-3.689-11.371-8.954-13.688v-12.791c0.073-2.745-1.753-5.261-4.51-5.967-22.414-5.744-45.532-8.872-68.808-9.332v-14.823c0-0.361-0.038-0.713-0.099-1.056h6.711c3.313,0 6-2.687 6-6v-11.668h31.395c5.396,0 10.434-2.408 13.821-6.607 3.389-4.199 4.678-9.632 3.537-14.906l-.959-4.433 18.042-9.609c1.957-1.042 3.18-3.079 3.18-5.296v-35.119h4.068c3.313,0 6-2.687 6-6s-2.684-6-5.997-6zm-167.969,163.294c-1.42109e-14-1.628 1.325-2.954 2.954-2.954 1.628,0 2.953,1.325 2.953,2.954s-1.325,2.954-2.953,2.954c-1.629,0-2.954-1.325-2.954-2.954zm146.637,0c0-1.628 1.325-2.954 2.954-2.954 1.628,0 2.953,1.325 2.953,2.954s-1.325,2.954-2.953,2.954c-1.629,0-2.954-1.325-2.954-2.954zm-70.309,3.01c-1.628,0-2.953-1.325-2.953-2.954s1.325-2.954 2.953-2.954c1.629,0 2.954,1.325 2.954,2.954s-1.325,2.954-2.954,2.954zm6.557-72.667h-13.226v-5.667h13.226v5.667zm-58.385-17.667c-2.351,0-3.783-1.301-4.429-2.077-0.645-0.775-1.663-2.421-1.234-4.732l1.641-8.852c0.506-2.729 2.888-4.71 5.663-4.71h98.225c2.693,0 5.061,1.91 5.63,4.542l1.914,8.852c0.369,1.71-0.049,3.473-1.147,4.834s-2.734,2.143-4.484,2.143h-101.779zm10.413-62.988c-1.561-1.631-2.364-3.771-2.265-6.025l3.899-88.156c0.194-4.391 3.789-7.831 8.185-7.831h63.08c4.396,0 7.99,3.439 8.185,7.83l3.899,88.156c0.1,2.255-0.704,4.395-2.265,6.025s-3.662,2.529-5.919,2.529h-70.881c-2.256,0.001-4.357-0.897-5.918-2.528zm44.693,14.529v16.088h-6.666v-16.088h6.666z"/>
                        </g>
                    </svg>
                    <Typography variant={"h3"} sx={styles.place_name} fontFamily={"dana-bold"}>اداره و دفتر</Typography>
                </Grid>
                <Grid container item direction={"column"} xs={6} md={4} lg={2} alignItems={"center"} gap={20}
                      sx={styles.place} onClick={() => {
                    router.push("/products?category=kitchen_poster")
                }}>

                    <svg width={matchesMD ? 40 : 70} height={matchesMD ? 40 : 70} id="Layer_1"
                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path d="M460.8,0H348.16H163.84H51.2c-5.655,0-10.24,4.585-10.24,10.24v122.88c0,5.655,4.585,10.24,10.24,10.24h112.64h184.32
			H460.8c5.655,0,10.24-4.585,10.24-10.24V10.24C471.04,4.585,466.455,0,460.8,0z M153.6,122.88H61.44V20.48h92.16V122.88z
			 M337.92,122.88H174.08V20.48h163.84V122.88z M450.56,122.88H358.4V20.48h92.16V122.88z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="102.4" y="409.6" width="61.44" height="20.48"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <rect x="348.16" y="409.6" width="61.44" height="20.48"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M466.015,296.96H440.32v-61.44c0-5.655-4.585-10.24-10.24-10.24h-102.4c-5.655,0-10.24,4.585-10.24,10.24v61.44H45.985
			C20.63,296.96,0,317.63,0,343.04v35.84v102.4V512h20.48v-20.48H256h235.52V512H512v-30.72v-102.4v-35.84
			C512,317.63,491.37,296.96,466.015,296.96z M337.92,245.76h81.92v51.2h-81.92V245.76z M245.76,471.04H20.48v-81.92h225.28V471.04z
			 M491.52,471.04H266.24v-81.92h225.28V471.04z M491.52,368.64H256H20.48v-25.6c0-14.115,11.44-25.6,25.505-25.6H327.68h102.4
			h35.935c14.065,0,25.505,11.485,25.505,25.6V368.64z"/>
                            </g>
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

                    <Typography variant={"h3"} sx={styles.place_name} fontFamily={"dana-bold"}>آشپزخانه</Typography>
                </Grid>
                <Grid container item direction={"column"} xs={6} md={4} lg={2} alignItems={"center"} gap={20}
                      sx={styles.place} onClick={() => {
                    router.push("/products?category=living_room_poster")
                }}>
                    <svg width={matchesMD ? 40 : 70} height={matchesMD ? 40 : 70} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 315 315">
                        <path
                            d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z"/>
                    </svg>
                    <Typography variant={"h3"} sx={styles.place_name} fontFamily={"dana-bold"}>اتاق خواب</Typography>
                </Grid>
                <Grid container item direction={"column"} xs={6} md={4} lg={2} alignItems={"center"} gap={20}
                      sx={styles.place} onClick={() => {
                    router.push("/products?category=living_room_poster")
                }}>
                    <svg width={matchesMD ? 40 : 70} height={matchesMD ? 40 : 70} version="1.1" id="Layer_1"
                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 512 512">
                        <g>
                            <g>
                                <circle cx="361.739" cy="205.913" r="16.696"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <circle cx="361.739" cy="339.478" r="16.696"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M495.304,55.652H16.696C7.475,55.652,0,63.127,0,72.348v66.783c0,9.22,7.475,16.696,16.696,16.696h16.696v283.826
			c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696V155.826H244.87v283.826
			c0,9.22,7.475,16.696,16.696,16.696c9.22,0,16.696-7.475,16.696-16.696v-16.696h166.957v16.696c0,9.22,7.475,16.696,16.696,16.696
			s16.696-7.475,16.696-16.696V155.826h16.696c9.22,0,16.696-7.475,16.696-16.696V72.348C512,63.127,504.525,55.652,495.304,55.652z
			 M100.174,422.957H66.783v-267.13h33.391V422.957z M445.217,389.565H278.261V289.391h166.957V389.565z M445.217,256H278.261
			V155.826h166.957V256z M478.609,122.435H116.87H50.087H33.391V89.043h445.217V122.435z"/>
                            </g>
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

                    <Typography variant={"h3"} sx={styles.place_name} fontFamily={"dana-bold"}>اتاق کار</Typography>
                </Grid>
                <Grid container item direction={"column"} xs={6} md={4} lg={2} alignItems={"center"} gap={20}
                      sx={styles.place} onClick={() => {
                    router.push("/products?category=living_room_poster")
                }}>
                    <svg width={matchesMD ? 40 : 70} height={matchesMD ? 40 : 70} version="1.1" id="Layer_1"
                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 512.128 512.128">
                        <g>
                            <g>
                                <path d="M496.128,298.736c-8.832,0-16,7.168-16,16c0,11.968-9.712,21.328-22.096,21.328H54.208
			c-12.176,0-22.096-9.744-22.096-21.712c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16c0,29.616,24.272,53.712,54.096,53.712
			h403.824c29.824,0,54.096-23.92,54.096-53.328C512.128,305.904,504.96,298.736,496.128,298.736z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M425.824,128.064H86.384c-29.472,0-54.384,24.768-54.384,54.08v25.92c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16
			v-25.92c0-11.968,10.256-22.08,22.384-22.08h339.44c12.016,0,22.176,10.112,22.176,22.08v25.92c0,8.832,7.168,16,16,16
			c8.832,0,16-7.168,16-16v-25.92C480,152.336,455.696,128.064,425.824,128.064z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M56.496,192.064H39.728C17.824,192.064,0,209.6,0,231.152v88.912c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-88.912
			c0-3.968,3.392-7.088,7.728-7.088h16.784c4.272,0,7.488,3.04,7.488,7.088v56.912c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16
			v-56.912C96,209.6,78.288,192.064,56.496,192.064z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M472.624,192.064H456.96c-22.208,0-40.96,18.08-40.96,39.504v56.496c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16
			v-56.496c0-3.728,4.512-7.504,8.96-7.504h15.664c4.064,0,7.376,3.36,7.376,7.504v88.496c0,8.832,7.168,16,16,16
			c8.832,0,16-7.168,16-16v-88.496C512,209.776,494.336,192.064,472.624,192.064z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M432,272.064H80c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h352c8.832,0,16-7.168,16-16
			C448,279.232,440.832,272.064,432,272.064z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M48,336.064c-8.832,0-16,7.168-16,16v16c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-16
			C64,343.232,56.832,336.064,48,336.064z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M464,336.064c-8.832,0-16,7.168-16,16v16c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16v-16
			C480,343.232,472.832,336.064,464,336.064z"/>
                            </g>
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

                    <Typography variant={"h3"} sx={styles.place_name} fontFamily={"dana-bold"}>حال و
                        پذیرایی</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default React.memo(Places)