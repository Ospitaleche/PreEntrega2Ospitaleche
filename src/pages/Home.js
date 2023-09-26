import React from 'react';
import ItemList from '../components/itemlist';

const Home = ({ items }) => {
  return (
    <div className="home">
      <h1>All Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default Home;