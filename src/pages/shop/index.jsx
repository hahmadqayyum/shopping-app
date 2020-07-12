import React from 'react'
import Main from '../../components/Main'
import ProductList from '../shop/ProductList'
const Shop = () => {

  return (
    <Main title="Shop Now" description="Store page" >
      <div>
        <ProductList />
      </div>
    </Main>
  );
}

export default Shop;