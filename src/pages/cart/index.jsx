import React, { useContext } from 'react';
import Main from '../../components/Main';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ShoppingCart from './ShoppingCart';
import './index.css'

const Cart = () => {

  const { shopCartItems, checkOut } = useContext(ShoppingCartContext)

  return (
    <Main title="Cart" description="Shopping Cart" >
      

      {
        shopCartItems.length > 0 &&
        <ShoppingCart />
      }

      {(checkOut === false && shopCartItems.length === 0) &&
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
        </div>
      }

      {checkOut &&
        <div>
          <h2>Thank you for your order</h2>
        </div>
      }
    </Main>
  )
}

export default Cart
