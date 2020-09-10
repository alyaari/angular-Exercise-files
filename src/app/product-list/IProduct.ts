export interface IProduct {
    productId?: number,
    productName?: string,
    productCode?: string,
    releaseDate?:Date|string,
    description?: string,
    price?: number,
    starRating?: number,
    imageUrl?: string
}
