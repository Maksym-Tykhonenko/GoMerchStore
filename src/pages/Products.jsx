import { getProducts } from "fakeApi";

import { useSearchParams } from 'react-router-dom';

import { ProductsList } from "components/ProductsList/ProductsList";
import { SearchBox } from "components/SearchBox/SearchBox";


export const Products = () => {
    const products = getProducts()
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";

    const visibleProducts = products.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
    );

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };
    
    return (
        <>
            <SearchBox value={productName} onChange={updateQueryString} />
            <ProductsList products={visibleProducts} />
        </>
    );
};