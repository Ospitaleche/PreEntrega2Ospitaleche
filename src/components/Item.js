import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      {/* placeholder agregar al carrito */}
    </div>
  );
};

export default Item;