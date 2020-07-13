import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const ProductItem = ({ product }) => {
  const classes = useStyles();

  const { addProduct, increment, shopCartItems } = useContext(ShoppingCartContext)

  const itemInCart = product => {

    return shopCartItems.find(item => item.id === product.id)
  }
  ////////////////////////////////////////////

  return (
    <div style={{ margin: '50px 50px' }}>
      <Grid item xs={12} sm={12} >

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={product.imgUrl}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* {
            !itemInCart(product) &&
            <Button size="medium" color="primary" onClick={addProduct}>
              <AddShoppingCartIcon />
            </Button>
          }

          {
            itemInCart(product) &&
            <Button size="large" color="primary" onClick={increment}>
              <AddIcon />
            </Button>
          } */}
          {
            !itemInCart(product) &&
            <Button onClick={() => addProduct(product)}>
              <AddShoppingCartIcon style={{ color: 'blue' }} />
            </Button>
          }

          {
            itemInCart(product) &&
            <Button onClick={() => increment(product)}>
              <AddIcon style={{ color: 'blue' }} />
            </Button>
          }

        </Card>
      </Grid>
    </div >
  );
}
export default ProductItem;
////////////////////////////////////
// return (
//   <div className="card card-body">
//     <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }} className="img-fluid"
//       src={product.imgUrl} alt="" />
//     <p>{product.name}</p>
//     <h3 className="text-left">${(product.price)}</h3>
//     <div className="text-right">

//       {
//         !itemInCart(product) &&
//         <button onClick={() => addProduct(product)}
//           className="btn btn-primary btn-sm">Add to cart</button>
//       }

//       {
//         itemInCart(product) &&
//         <button onClick={() => increment(product)}
//           className="btn btn-primary btn-sm">Add more</button>
//       }


//     </div>
//   </div>
// );
// }

// export default ProductItem;



// /////////////////////////////////////////////////////////////////


// import React, { useContext } from 'react';

// // import { BrowserRouter as Router, Route ,Links,useParams} from 'react-router-dom';



// export default function HomeCards({ product, img }) {
//   const { addProduct } = useContext(CartContext);



