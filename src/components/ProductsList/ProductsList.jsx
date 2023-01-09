import { Link, useLocation } from "react-router-dom";
import {List, ListItem, ProductName} from "./ProductsList.styled";


export const ProductsList = ({ products }) => {
    const location = useLocation();
    //console.log(location.state)

    return (
        <List>
            {products.map(({ id, name }) => (
                <ListItem key={id}>
                    <Link to={`${id}`} state={{ from: location }}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                        <ProductName>{name}</ProductName>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}

