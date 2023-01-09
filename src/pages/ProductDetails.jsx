import { getProductById } from "fakeApi";
import { useParams, Link, useLocation } from 'react-router-dom';

export const ProductDetails = () => {
    const { productId } = useParams();

    const product = getProductById(productId);

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/products";
    
    return (
        <>
            <Link to={backLinkHref}>Back to products</Link>
            <div>
                <img src="https://via.placeholder.com/200x100" alt="" />
                <h2>Product name: {product.name}</h2>
                <h3>Product id: {product.id}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </>
    );
};