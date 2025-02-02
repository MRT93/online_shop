import {z} from "zod";
import { Product } from "@/types/product";
import {Types , Document} from "mongoose";

export interface User {
    _id:string;
    username: string;
    email: string;
    role: "user" | "admin";
    wishlist: Product[];
    cart:{ product : Product , quantity:number }[];
}

export interface UserSchema extends Omit<Required<User>, "wishlist" | "cart" | "_id"> , Document<string> {
    password:string;
    wishlist: Types.ObjectId[];
    cart: { product : Types.ObjectId , quantity:number }[];
}

export const signupSchema = z.object({
    username : z.string({
        required_error: "نام کاربری الزامی است",
        invalid_type_error: "نام کاربری باید یک رشته باشد",
    }).trim().toLowerCase().min(2,"نام کاربری حداقل باید داری ۲ نویسه باشد "),
    email : z.string({
        required_error: "ایمیل الزامی است",
        invalid_type_error: "ایمیل باید یک رشته باشد",
    }).email("ایمیل وارد شده صحیح نیست").trim().toLowerCase(),
    password:z.string({
        required_error: "رمز ورود الزامی است",
        invalid_type_error: "رمز ورود باید یک رشته باشد",
    }).min(6,"رمز ورود حداقل باید دارای ۶ نویسه باشد")
})

export interface SignupSchema  extends z.infer<typeof signupSchema>{}

export const loginSchema = z.object({
    identifier : z.string({
        required_error: "ایمیل یا نام کاربری الزامی است",
        invalid_type_error: "ایمیل یا نام کاربری باید یک رشته باشد",
    }).trim().toLowerCase().min(2,"ایمیل یا نام کاربری حداقل باید داری ۲ نویسه باشد "),
    password:z.string({
        required_error: "رمز ورود الزامی است",
        invalid_type_error: "رمز ورود باید یک رشته باشد",
    }).min(6,"رمز ورود حداقل باید دارای ۶ نویسه باشد")
})

export interface LoginSchema  extends z.infer<typeof loginSchema>{}