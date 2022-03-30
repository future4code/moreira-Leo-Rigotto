export type Product = { 
    id: string,
    name: string,
    price: number
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Batata',
        price: 3
    },
    {
        id: '2',
        name: 'Alface',
        price: 2
    },
    {
        id: '3',
        name: 'Tomate',
        price: 4
    }
]