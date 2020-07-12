import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import RemoveShoppingCartRoundedIcon from '@material-ui/icons/RemoveShoppingCartRounded';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ShoppingCartItem = ({ product }) => {

  const classes = useStyles();

  const { shopCartItems, increment, decrement, removeProduct, itemsCount, totalAmount } = useContext(ShoppingCartContext);




  return (
    <div className={classes.root} >
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={3} wrap="nowrap">
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.imgUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2} wrap="nowrap">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <CardActions>
                    {product.quantity > 1 &&
                      <Button size="medium" onClick={() => decrement(product)}>
                        <RemoveIcon />
                      </Button>}
                    <Button size="medium" onClick={() => increment(product)}>
                      <AddIcon />
                    </Button>
                  </CardActions>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <CardActions>
                    <Button size="medium" onClick={() => removeProduct(product)}>
                      <RemoveShoppingCartRoundedIcon style={{ color: 'blue' }} />
                    </Button>
                  </CardActions>

                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${product.price}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {
          shopCartItems.length > 0 &&
          <div className="ship">
            <Grid container spacing={3} wrap="nowrap" >
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2} wrap="nowrap">
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Quantity: {itemsCount}
                    </Typography>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>

                        <Typography variant="subtitle1">Total Amount: ${totalAmount}</Typography>
                      </Typography>
                    </Grid>
                    <Typography variant="body2" color="textSecondary">
                      <CardActions>
                        <Button onClick={() => { document.querySelector('.ship').innerHTML = "Thanks For Your Order" }} style={{ color: 'blue' }}>
                          <LocalShippingIcon />
                        </Button>
                        {/* <Button onClick={clearCart}>CLEAR</Button> */}
                      </CardActions>
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </div>
        }
      </Paper>
    </div>
  );
}

export default ShoppingCartItem;

////////////////

// return (
//   <div className="row no-gutters py-2">
//     <div className="col-sm-2 p-2">
//       <img
//         alt={product.name}
//         style={{ margin: "0 auto", maxHeight: "50px" }}
//         src={product.imgUrl} className="img-fluid d-block" />
//     </div>
//     <div className="col-sm-4 p-2">
//       <h5 className="mb-1">{product.name}</h5>
//       <p className="mb-1">Price: {product.price} </p>

//     </div>
//     <div className="col-sm-2 p-2 text-center ">
//       <p className="mb-0">Qty: {product.quantity}</p>
//     </div>
//     <div className="col-sm-2 p-2 text-right">
//       <button
//         onClick={() => increment(product)}
//         className="btn btn-primary btn-sm mr-2 mb-1">
//         +
//             </button>

//       {
//         product.quantity > 1 &&
//         <button
//           onClick={() => decrement(product)}
//           className="btn btn-danger btn-sm mb-1">
//           -onClick={() => removeProduct(product)}
//               </button>
//       }






//     </div>
//     <div className="col-sm-2 p-2 text-right">
//       <button

//         className="btn btn-danger btn-sm mb-1">
//         x
//         </button>
//     </div>
//   </div>
// )
// }

// export default ShoppingCartItem




// ////////////////////////////////////////////////////////////////////////////



// import React from 'react';




// export default function ComplexGrid() {



