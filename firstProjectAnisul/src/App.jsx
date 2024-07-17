import { useState } from 'react';

import ProductList from './components/products.jsx';
import './assets/css/products.css';

const products = [
  {
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 29.99,
      rating: 4.5,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  },
  {
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 49.99,
      rating: 4.0,
      description: "Description: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
  },
  {
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      title: "Mens Cotton Jacket",
      price: 19.99,
      rating: 3.5,
      description: "Description: great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
  },
  {
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      title: "Mens Casual Slim Fit",
      price: 99.99,
      rating: 5.0,
      description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
  },
  {
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 39.99,
      rating: 4.2,
      description: " From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."
  },
  {
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      title: "Solid Gold Petite Micropave",
      price: 59.99,
      rating: 4.8,
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days."
  }
];



function App() {
 

    return (
        <div className="containers">
            <h1>BD Store</h1>
            <ProductList products={products}/>
        </div>

        
    );
}

export default App;
