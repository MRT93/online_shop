import {Schema, models, model} from "mongoose";
import bcrypt from "bcrypt";
export interface UserType {
    username: string;
    password: string;
    email: string;
    _id : string;
    wishlist: string[];
    cart: string[];
    role : string;
}

const userSchema = new Schema<UserType>(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            select : false,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role : {
          type : String,
          default : "user"
        },
        wishlist: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",

            }],

        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],

    }
)

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

export default models.User || model<UserType>('User', userSchema);
