export function ProductItem(product) {
    return <p key={product.product.id}>{product.product.name}</p>
}