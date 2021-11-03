const products = [
    {
        id: 0,
        name: "First product",
    },
    {
        id: 1,
        name: "Second product"
    },
    {
        id: 2,
        name: "Third product"
    }
]

export default function handler(req, res) {
    res.status(200).json(products)
}