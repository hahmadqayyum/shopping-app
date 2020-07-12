import React, { useContext } from 'react'

import Button from '@material-ui/core/Button';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import ShoppingCartItem from './ShoppingCartItem';



const ShoppingCart = () => {

    const { shopCartItems,  clearCart} = useContext(ShoppingCartContext)

    return (


        <div className="card card-body col-md-8">

            {
                shopCartItems.map(product =>
                    <ShoppingCartItem key={product.id} product={product} />)
            }
            <div style={{ width: '100%',paddingTop: '20px'}}>
                <Button onClick={clearCart} style={{ backgroundColor: 'red', color: 'white', width: '100%' }}>Remove ENTIRE Cart</Button>
            </div>
        </div>







    )

}

export default ShoppingCart