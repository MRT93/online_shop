import CartItem from "./CartItem";
import type {User} from "@/types/user";
import {cn} from "@/lib/utils";

interface Props {
    user?: User
}

function Cart({user}: Props) {
    return (
        <ul className={cn("grid gap-3 min-h-full grid-cols-3 content-start", {
            "content-center": user?.cart.length === 0,
        })}>
            {
                !user || user.cart.length === 0 ?
                    <p className={"text-center flex justify-center items-center col-span-3 text-sm md:text-base h-[300px]"}>
                        سبد خرید شما خالی است !
                    </p> :
                    user.cart.map((item) => <CartItem product={item.product} key={item.product._id}/>)
            }
        </ul>
    )
}

export default Cart