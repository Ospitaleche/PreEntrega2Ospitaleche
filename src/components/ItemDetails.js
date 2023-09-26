import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div className="item-details">
      <img src={item.imageUrl} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
      {/* Add an "Add to Cart" button here */}
    </div>
  );
};

export default ItemDetails;