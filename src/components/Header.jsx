import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import StoreIcon from '@material-ui/icons/Store';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/">
        <MenuItem>
          <IconButton color="inherit">

            <HomeRoundedIcon />

          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>

      <Link to="/cart">
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const { itemsCount } = useContext(ShoppingCartContext)




  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <IconButton aria-label="show 4 new mails" color="inherit" style={{ pointerEvents: 'none' }}>
              <StoreIcon />
            </IconButton>


          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <Link to="/">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge color="secondary">
                  <HomeRoundedIcon style={{ color: 'white' }} />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/cart">
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={itemsCount} color="secondary">
                  <ShoppingCartIcon style={{ color: 'white' }} />
                </Badge>
              </IconButton>
            </Link>



            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle style={{ color: 'white' }} />
            </IconButton>



          </div>
          <div className={classes.sectionMobile}>

            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: 'white' }} />
            </IconButton>

          </div>


        </Toolbar>

      </AppBar>

      {renderMobileMenu}

      {renderMenu}

    </div>
  );
}

export default Header;









// return (
//   <div>
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">

//       <div id="navbarColor01">
//         <ul className="navbar-nav ">

//           <li className="nav-item">
//             <Link to='/' className="nav-link">Shop Now</Link>
//           </li>
//           <li className="nav-item">
//             <Link to='/contact' className="nav-link">Contact</Link>
//           </li>
//           <li className="nav-item">
//             <Link to='/cart' className="nav-link">View Cart ({itemsCount})</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </div>
// )





///////////////////////////////////////////////////////////////////////////////////////




// import React from 'react';

// import { Link } from 'react-router-dom'

// export default function TopNav() {












