import {useCallback, useState} from "react";
import {useRouter} from "next/router";
import type {ProductType} from "@/db/productModel";
import useFetch from "@/hooks/useFetch";


const useSearch = (device: "desktop" | "mobile", props?: { onOpen: (open : boolean) => void }) => {

    const router = useRouter()

    const [search, setSearch] = useState<string>("")
    const [isWrong, setIsWrong] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [results, setResults] = useState<Array<ProductType>>([])

    const submitSearchHandler = async (event) => {
        event.preventDefault()
        if (search.trim() === "") {
            setIsWrong(true)
            setTimeout(() => {
                setIsWrong(false)
            }, 5000)
            return
        }
        setIsWrong(false)
        router.push(`/products?search=${search}`)
        if (device === "mobile") {
            closeSearchHandlerMobile()
        } else {
            closeSearchHandlerDesktop()
        }

    }


    const closeSearchHandlerDesktop = useCallback(() => {
        setSearch("")

    }, [])

    const closeSearchHandlerMobile = useCallback(() => {
        setSearch("")
        props.onOpen(false)

    }, [])

    const searchChangeHandler = (e) => {
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


    const handleChange = async (search: string) => {
        setIsLoading(true)
        const res = await useFetch.get(`/api/products?search=${search}`)
        setResults(res.products.slice(0, 4));
        setIsLoading(false)

    };
    const optimizedFn = useCallback(debounce(handleChange), []);

    if (device === "desktop") {

        return {
            search,
            isWrong,
            isLoading,
            searchChangeHandler,
            submitSearchHandler,
            results,
            closeSearchHandlerDesktop,
            router
        }
    } else {
        return {search, isWrong, isLoading, searchChangeHandler, submitSearchHandler, results, closeSearchHandlerMobile}

    }
}

export default useSearch