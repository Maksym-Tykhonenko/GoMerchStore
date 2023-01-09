import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Products } from "../pages/Products";
import { ProductDetails } from '../pages/ProductDetails';
import { Mission } from './Mission/Mission';
import { Team } from './Team/Team';
import {Reviews} from './Reviews/Reviews';
import { NotFound } from 'pages/NotFound';



export const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home/>}/>
        <Route path="about" element={<About />} >
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route >
        <Route path="products" element={<Products />} />
        <Route path='products/:productId' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Route>
        
    </Routes>
  );
}
