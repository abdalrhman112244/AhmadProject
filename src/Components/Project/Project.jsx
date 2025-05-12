import React from 'react';
import './Project.css';
import { products } from './../../App'; // استيراد products بشكل صحيح باستخدام {}
const Project = () => {

  return (
    <div className='product'>
      <h1>المنتجات</h1>
<div className='pro'>
{products.map((item, index) => {
        return (
          <div key={item.id} className="product-card">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {item.photo && <img src={item.photo} alt={item.name} />}
          </div>
        );
      })}
</div>
    </div>
  );
};
export default Project;
