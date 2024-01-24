"use client"
import Link from "next/link";
import Image from "next/legacy/image"
import {Heart, HeartOutlined} from "@/components/shared/Icons";
import type {Product} from "@/types/product";
import {Button} from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import useProduct from "@/hooks/useProduct";

interface Props {
    product : Product
}
function ProductCard( { product }: Props) {

    const {isWishlistLoading , isInWishlist , handleProduct} = useProduct(product);

    return (
        <div className={"rounded flex flex-col p-2 relative gap-2 min-h-full border border-gray-600/10 bg-white"}>
            <Button variant={"outline"} size={"icon"} disabled={isWishlistLoading}
                className={"absolute right-3 top-3 z-10 bg-black/30 border-none hover:bg-black/20 disabled:opacity-100"}
                onClick={()=>handleProduct("wishlist")} aria-label={"افزودن به لیست علاقمندی ها"}>
                {
                    isWishlistLoading ?
                        <Loader className={"border-white"} /> :
                        isInWishlist ?
                            <Heart className={"fill-primary size-5 md:size-6"}/> :
                            <HeartOutlined className={"fill-white size-5 md:size-6"}/>
                }
            </Button>
            <Link href={`/products/${product.slug}`} aria-label={product.title}>
                <Image src={`/pictures/products/${product.slug}.jpg`} alt={product.title} width={400} height={400}/>
            </Link>
            <Link className={"h-[3rem] font-dana-bold text-xs md:text-sm text-gray-600"} href={`/products/${product.slug}`}>
                {product.title}
            </Link>
            <span className={"text-primary text-xs md:text-sm"}>
                {product.price + " تومان هر متر مربع"}
            </span>
        </div>
    )
}

export default ProductCard