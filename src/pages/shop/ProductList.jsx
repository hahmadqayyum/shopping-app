import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProductItem from './ProductItem'
import { ProductsContext } from '../../contexts/ProductContext';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))
const ProductList = () => {
    const classes = useStyles();

    const { products } = useContext(ProductsContext)

    return (
        <div className={classes.root}>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
           
        >
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }

            </Grid>


            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                  </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default ProductList