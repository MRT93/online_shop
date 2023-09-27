import {createTheme} from "@mui/material/styles";

const theme  = createTheme({
    spacing: 1,
    direction: "rtl",

    palette: {
        mode: "light",

        primary: {
            main: "#069f69",
        },
        secondary: {
            main: "#f1c800"
        },
        success : {
            main: "#069f69",
        },
        white: {
            main: "#fff"
        },
        text: {
            secondary: "#000",
            primary: "#1d1d1e"
        },
        background:{
            paper:"#f5f5f5"
        }
    },

    typography: {
        fontFamily: "inherit",
    }
    ,
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: "1.6rem",
                },

            }

        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    color: "white"
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    color:"#555"
                }
            }
        },
        MuiPagination:{
            styleOverrides:{
                root:{
                    direction:"rtl"
                }
            }
        },
        MuiPaginationItem:{
            defaultProps:{
                dir:"rtl"
            },
            styleOverrides:{
                root:{
                    fontSize:14,
                    padding:10,
                    color:"#333",
                    direction:"rtl"
                }
            }
        },
        MuiMenu:{
            defaultProps:{
                disableScrollLock:true  // to prevent adding padding to the body on opening the menu
            }
        },
    }
})

declare module '@mui/material/styles' {
    interface Palette {
        white: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}

declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        white: true;
    }
}

export default theme