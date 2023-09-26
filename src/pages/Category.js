import React from 'react';
import ItemList from '../components/itemlist';

const Category = ({ items, category }) => {
  return (
    <div className="category">
      <h1>{category}</h1>
      <ItemList items={items.filter((item) => item.category === category)} />
    </div>
  );
};

export default Category;