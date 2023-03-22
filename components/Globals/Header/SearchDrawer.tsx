import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import React, {useState, useCallback} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import SearchResults from "../SearchResults";


const styles = {
    searchField: {
        width: {xs: 1, sm: .6, md: .6},
        fontSize: {xs: 4, sm: "2rem"},
        bgcolor: "#fff",

    },
    searchIcon: {
        fontSize: 25,
        color: "primary.main",
    },
    closeIcon: {
        color: "white.main",
        fontSize: 35,
        bgcolor: "primary.main",
        borderRadius: 20,

    },

    searchDrawer: {
        minHeight: "100vh",
        overflowY:"scroll",
        backgroundColor: "#f5f5f5",
        position: "fixed",
        top: 0,
        right: 0,
        width: "100vw",
        px: 20,
        pt: 30,
        justifyContent: "center",
        // alignItems: "center",
        transition: "all .6s",
        zIndex: 1000


    }


}

interface Props {
    onOpen: any;
    open: boolean;
}

const SearchDrawer: React.FC<Props> = (props) => {

    const router = useRouter()
    const [search, setSearch] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [results, setResults] = useState<any[]>([])
    const [isWrong, setIsWrong] = useState(false)

    const changeHandler = (e) => {
        setSearch(e.target.value)
        optimizedFn(e.target.value)
        if (e.target.value.trim() === "") {
            setIsWrong(true)
            setTimeout(() => {
                setIsWrong(false)
            }, 5000)

        } else {
            setIsWrong(false)
        }
    }

    /*** start of debouncing ***/
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 800);
        };
    };


    const handleChange = async (value) => {
        setIsLoading(true)
        const res = await axios.post(`/api/products`, {search: value})
        setResults(res.data.products.slice(0, 5));
        setIsLoading(false)
        console.log(res.data)

    };
    const optimizedFn = useCallback(debounce(handleChange), []);

    /*** end of debouncing ***/


    const submitSearchHandler = (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            setIsWrong(true)
            setTimeout(() => {
                setIsWrong(false)
            }, 5000)
            return
        }
        setIsWrong(false)
        axios.post(`/api/products`, {search}).then(_ => {
            router.push(
                {
                    pathname: `/products`,
                    query: {
                        search,
                        page: 1
                    }

                })
            setSearch("")
        }).catch(err => {
            console.log(err)

        })
        props.onOpen(false)
    }

    return (
        <Grid container item spacing={10} component={"form"} onSubmit={submitSearchHandler} sx={{
            ...styles.searchDrawer,
            transform: props.open ? "translateY(0)" : "translateY(-100%)"
        }}>
            <Grid item xs>
                <Tooltip title={"لطفا عبارتی برای جستجو وارد کنید!"} open={isWrong} placement={"bottom"}
                         arrow>
                    <TextField
                        error={isWrong}
                        fullWidth
                        placeholder={"جستجو ..."}
                        value={search}
                        onChange={changeHandler}
                        sx={styles.searchField}
                        variant="outlined"
                        size={"medium"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton type={"submit"}>
                                        <Search sx={styles.searchIcon}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                            // endAdornment: (closeButton)
                        }}
                    />
                </Tooltip>
            </Grid>
            <Grid item xs={"auto"}>
                <IconButton onClick={() => props.onOpen(false)}>
                    <Close sx={styles.closeIcon}/>
                </IconButton>

            </Grid>

            {
                search.trim().length >= 3 &&
                <SearchResults isLoading={isLoading} results={results} search={search}
                               submitSearchHandler={submitSearchHandler}/>
            }

        </Grid>


    )
}

export default SearchDrawer;
