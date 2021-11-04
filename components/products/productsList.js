import {useEffect, useState} from "react";
import {ProductItem} from "./productItem";

export function ProductsList() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch('api/products')
            .then(res => res.json())
            .then(results => setProducts(results))
    }, [])

    if (products === null) return null

    return (
         products && <div>
            {products.map((product, i) => {
                return <ProductItem key={i} product={product} />
            })}
        </div>
    )
}