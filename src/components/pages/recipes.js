import { useState } from "react";

 import Navigation from "../Navigation/Nav";
import Products from "../pages/Products";
import products from "../db/data";
import Recommended from "../Recommended";
// import Sidebar from "./Sidebar/Sidebar";
import Card from "../Card";


function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(// gets shoes called product from db/data.js
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );



  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // 
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) { //if this is then
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) { // if cagtegory clicked then its that category 
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map( // returns array
      ({ img, title, star, reviews, prevPrice, newPrice }) => ( // values are from card.js 
        <Card
          key={Math.random()} // the key math.random is a number greater than 0
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
/* {bracket code handle change etc must be made in app and its commponent page } 
example app js

const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };


  product js

  const Recommended = ({ handleClick }) => {
  return (

*/

 // <Navigation query={query} handleInputChange={handleInputChange} />
  return (
    <>
      
      <Navigation query={query} handleInputChange={handleInputChange} />

      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default  Recipes;
