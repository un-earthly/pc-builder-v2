export interface Product {
    id: string;
    image: string;
    name: string;
    category: string;
    status: "In Stock" | "Out of stock";
    price: number;
    description: string;
    keyFeatures: {
        brand: string;
        model: string;
        specification: string;
        port: string;
        type: string;
        resolution: string;
        voltage: string;
        // Add more key features as needed
    };
    individualRating: number;
    averageRating: number;
    reviews: Review[];
}

export interface Review {
    date: string;
    rating: number;
    comment: string;
    userId: string;
}

export interface ProductState {
    products: Product[];
}