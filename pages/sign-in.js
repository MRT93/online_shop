import {
    Box,
    Button,
    CircularProgress,
    Grid,
    IconButton,
    InputAdornment,
    Snackbar,
    TextField,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";




import Head from "next/head";
import {Close, Create, Email, Login, Password, Person} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link"
import {Fragment, useContext, useState} from "react";
// import classes from "../styles/sign-in.modules.css"

// import "../styles/SignIn.css";
import axios from "axios";
import {useRouter} from "next/router";
import AuthContext from "../store/auth-context";
import {storeTokenAndUser} from "../middleware/tokenManager";
import loadingContext from "../store/loading-context";



const styles = {
    container: {
        minWidth: "100vw",
        minHeight: "100vh",
        // backgroundColor: "#02011e",
        // backgroundImage:"url('assets/pictures/hero_img4.jpg')",
        // backgroundRepeat:"no-repeat",
        // backgroundSize:"100% 100%",
        // filter:"blur(5px)",
        // backgroundColor: "#069f69",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        // my:100
    },
    form: {
        bgcolor: "white.main",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: {xs: 1, sm: 550},
        height: {xs: "100vh", sm: 550},
        // boxShadow:"2px 2px 5px rgba(0,0,0,.4)",
        zIndex: 99

    },
    inputField: {
        width: {xs: .8, sm: .7},
        mb: 15,


    },
    fieldIcon: {

        fontSize: "2rem",
        color: "primary.main"
    },
    backgroundImage: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) , url('assets/pictures/hero_img4.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        filter: "blur(5px)",
    },
    snackbar: {
        '& .css-1kr9x0n-MuiSnackbarContent-action': {
            mr: 70,
            pl: .1
        },

        '& .css-1exqwzz-MuiSnackbarContent-message': {
            p: 13
        },
    }


}

const SignIn = () => {

    //********************************** determine the type of form **********************************//
    const [error,setError] = useState(false)
    const [message,setMessage] = useState("")
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [typeOfForm, setTypeOfForm] = useState("signIn")





    const openSnackbarHandler = () => {
        setOpenSnackbar(true)

    }

    const closeSnackbarHandler = () => {
        setOpenSnackbar(false)
    }
    const typeOfFormHandler = (event, typeOfForm) => {
        // the bottom line is written like this so that only one tab can be active or disabled at a time
        if (typeOfForm !== null)
            setTypeOfForm(typeOfForm);
    }

    //********************************** form fields states **********************************//

    const [usernameValue, setUsernameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [usernameOrEmailValue, setUsernameOrEmailValue] = useState("")

    // //********************************** form fields touch states **********************************//
    //
    // const [usernameValueIsTouched, setUsernameValueIsTouched] = useState(false)
    // const [emailValueIsTouched, setEmailValueIsTouched] = useState(false)
    // const [passwordValueIsTouched, setPasswordValueIsTouched] = useState(false)
    // const [usernameOrEmailValueIsTouched, setUsernameOrEmailValueIsTouched] = useState(false)
    //
    //
    // //********************************** form fields helper text states **********************************//
    //
    // const [usernameHelperText, setUsernameHelperText] = useState("")
    // const [emailHelperText, setEmailHelperText] = useState("")
    // const [passwordHelperText, setPasswordHelperText] = useState("")
    // const [usernameOrEmailHelperText, setUsernameOrEmailHelperText] = useState("")

    //********************************** form fields change handlers **********************************//

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value)
    }
    const emailChangeHandler = (e) => {
        setEmailValue(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value)
    }
    const usernameOrEmailChangeHandler = (e) => {
        setUsernameOrEmailValue(e.target.value)
    }

    /*const changHandler = (e) => {

        let valid;
        switch (e.target.id) {
            case "username-field":
                setUsernameValue(e.target.value)
                valid = e.target.value.trim().length !== 0
                if (!valid)
                    setUsernameHelperText("نام کاربری باید حداکثر 3 کاراکتر داشته باشد !")
                else
                    setUsernameHelperText("")

                break

            case "email-field":
                setEmailValue(e.target.value)
                valid = e.target.value.toLowerCase().match(/\S+@\S+\.\S+/)
                if (!valid)
                    setEmailHelperText("ایمیل وارد شده صحیح نمی باشد !")
                else
                    setEmailHelperText("")
                break

            case "password-field":
                setPasswordValue(e.target.value)
                valid = e.target.value.length >= 6
                if (!valid)
                    setPasswordHelperText("رمز ورود باید حداقل 6 کاراکتر داشته باشد !")
                else
                    setEmailHelperText("")
                break

            case "username-or-email":
                setUsernameOrEmailValue(e.target.value)
                valid = e.target.value.length >= 3
                if (!valid)
                    setUsernameOrEmailHelperText("این فیلد باید بیش از 3 کاراکتر داشته باشد !")
                else
                    setUsernameOrEmailHelperText("")

                break


        }

    }
*/

    const router = useRouter()

    const action = (
        <IconButton
            size="medium"
            color={"white"}
            onClick={closeSnackbarHandler}>
            <Close fontSize={"large"}/>
        </IconButton>
    )

    const authContext =useContext(AuthContext)
    const {isLoading ,setIsLoading} = useContext(loadingContext)



    //********************************* form submission **********************************!//


    const formHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage("")
        setError(false)

        const user = typeOfForm === "signup" ? {
            username: usernameValue,
            email: emailValue,
            password: passwordValue
        } :
            {
            usernameOrEmail:usernameOrEmailValue,
            password: passwordValue

        }
        try {

            const response = await axios.post(`/api/${typeOfForm === "signup" ? "signup" : "sign-in"}`,user)
            setMessage(response.data.message)
            setError(!response.data.ok)
            authContext.login(response.data.user)
            await router.back()

            console.log(response)

        } catch (e) {
            console.log(e)
            setMessage(e.response.data.message)
            setError(!e.response.data.ok)
            setIsLoading(false)
            openSnackbarHandler()


        }
        setIsLoading(false)
        openSnackbarHandler()

    }


    return (
        <Grid container alignItems={"center"} justifyContent={"center"} sx={styles.container}>
            <Head>
                <title>ورود/ثبت نام</title>
            </Head>
            <Box sx={styles.backgroundImage}/>
            <Grid container item component={"form"}
                  onSubmit={formHandler}
                  sx={styles.form}>
                <Grid item container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <ToggleButtonGroup fullWidth size={"large"} color={"primary"} value={typeOfForm} exclusive
                                       onChange={typeOfFormHandler}>
                        <ToggleButton sx={{width: .5, fontSize: "1.6rem"}} value={"signIn"}>ورود</ToggleButton>
                        <ToggleButton sx={{width: .5, fontSize: "1.6rem"}} value={"signup"}>ثبت نام</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item my={typeOfForm !== "signup" ? 40 : 20}>
                    <Link href={"/"}>
                        <a>
                            <Image src={"/assets/pictures/logo3.png"} alt={"logo"} width={100}
                                   height={100}/>
                        </a>
                    </Link>
                </Grid>
                {typeOfForm === "signup" ? <Fragment>
                    <Grid item container justifyContent={"center"}>
                        <TextField
                            value={usernameValue}
                            onChange={usernameChangeHandler}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person sx={styles.fieldIcon}/>
                                    </InputAdornment>
                                ),
                            }}
                            sx={styles.inputField} id={"username-field"} required type={"text"}
                            placeholder={"نام کاربری"}/>
                    </Grid>
                    <Grid item container justifyContent={"center"}>
                        <TextField
                            value={emailValue}
                            onChange={emailChangeHandler}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email sx={styles.fieldIcon}/>
                                    </InputAdornment>
                                ),
                            }}
                            sx={styles.inputField} id={"email-field"} required type={"email"}
                            placeholder={"ایمیل"}/>
                    </Grid></Fragment> : <Grid item container justifyContent={"center"}>
                    <TextField
                        value={usernameOrEmailValue}
                        onChange={usernameOrEmailChangeHandler}

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person sx={styles.fieldIcon}/>
                                </InputAdornment>
                            ),
                        }}
                        sx={styles.inputField} id={"username-or-email"} required type={"text"}
                        placeholder={"ایمیل یا نام کاربری"}/>
                </Grid>}
                <Grid item container justifyContent={"center"}>
                    <TextField
                        value={passwordValue}
                        onChange={passwordChangeHandler}

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Password sx={styles.fieldIcon}/>
                                </InputAdornment>
                            ),
                        }}
                        sx={styles.inputField} required type={"password"}
                        placeholder={"رمز ورود"}/>
                </Grid>
                <Grid item container justifyContent={"center"}>
                    <Button type={"submit"} variant={"contained"}
                            startIcon={isLoading ?
                                <CircularProgress color={"white"} size={25}/> : typeOfForm === "signup" ? <Create/> :
                                    <Login/>}
                            sx={{
                                width: {xs: .8, sm: .7},
                                height: 55,
                                fontSize: "1.8rem",
                                gap: 10,
                                alignItems: "center"

                            }}>{typeOfForm === "signup" ? "ثبت نام" : "ورود"}</Button>
                </Grid>

                {typeOfForm === "signup" ? "" :
                    <Grid item container fontSize={"1.4rem"} mt={15} justifyContent={"center"}>
                        <Link href={"/forgot-password"}>رمز عبور خود را فراموش کرده ام ؟</Link>
                    </Grid>
                }
            </Grid>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={5000}
                sx={{
                    ...styles.snackbar,
                    '& .css-1qe5cpw-MuiPaper-root-MuiSnackbarContent-root': {
                        fontSize: "16px !important",
                        fontFamily: "dana-demibold",
                        // width:"70px",
                        backgroundColor: (error === false ? "success.main" : "error.main"),
                    },
                }}
                message={message}
                onClose={closeSnackbarHandler}
                action={action}
                anchorOrigin={{vertical: "bottom", horizontal: "right"}}
            />

        </Grid>
    )
}
export default SignIn