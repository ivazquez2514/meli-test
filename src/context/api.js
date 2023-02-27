import { createContext, useState } from 'react';
import {
    getProducts as getProductsFn,
    getProductById as getProductByIdFn
} from '../api';

export const ApiContext = createContext({});

export function ApiProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = (query) => {
        setIsLoading(true);
        getProductsFn(
            query,
            ({data}) => {
                const { items, categories } = data;
                setProducts(items.slice(0, 4));
                setCategories(categories);
            },
            () => {
                setIsLoading(false);
            }
        );
    }

    const getProductById = (productId) => {
        setIsLoading(true);
        getProductByIdFn(
            productId,
            ({data}) => {
                setSelectedProduct(data);
            },
            () => {
                setIsLoading(false);
            }
        )
    }

    return (
        <ApiContext.Provider value={{
            products,
            categories,
            selectedProduct,
            isLoading,
            getProducts,
            setProducts,
            setCategories,
            getProductById,
        }}>
            {children}
        </ApiContext.Provider>
    );
}