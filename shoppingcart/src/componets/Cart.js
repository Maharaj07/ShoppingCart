import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { removee,decreaseCart,addd } from '../Slices/UsersSlice';

export const Cart = ({ user,userLogin }) => {
  const dispatch = useDispatch();
  console.log(typeof user);
  console.log(user);
  const final=user.find((e)=>e.id===userLogin.id)
  console.log(final.cartitem);
  const siva=final.cartitem;
  const cart=siva.map((e)=>{
    return{
      title:e.title,
      price:e.price,
      image:e.image,
      id:e.id,
      quantity:e.quantity,
    }
  })
 

  const decreaseqty = (item) => {
  
      dispatch(decreaseCart({
  
        login: userLogin,
  
        cartItemId: item,
  
      }))
  
    }
  const addTocart = (item) => {

    dispatch(addd({
  
      login: userLogin, //  need to adjust this depending on your action payload structure
  
      cart: {
  
        id: item.id,
  
        quantity: 1
  
      }
  
    }));
  
  }
  

  const removeItem = (item) => {
    dispatch(removee({login:userLogin,cartItemId:item}));
    // toast.success(`Product has been removed from your cart!`, {
    //   position: toast.POSITION.BOTTOM_CENTER,
    // });
  };

  const totalCount = siva.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = siva.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='container pro'>
      <Fragment>
        {cart.length === 0 ? (
          <h2 className='mt-5 text-warning'>My Cart is Empty</h2>
        ) : (
          <Fragment>
            <h2 className='mt-5 text-warning'>
              My Cart: <b>{cart.length} Products</b>
            </h2>
            <div className='row d-flex justify-content-between'>
              <div className='col-12 col-lg-7'>
                {cart.map((item) => (
                  <Fragment key={item.id}>
                    <hr />
                    <div className='cart-item'>
                      <div className='row'>
                        <div className='col-4 col-lg-3'>
                        <Link to={`/product/${item.id}`}>
                          <img src={item.image} alt={item.name} height='115' width='115' />
                          </Link>
                        </div>
                        
                        <div className='col-5 col-lg-3'>
                          {item.title}
                        </div>
                        <div className='col-4 col-lg-2 mt-4 mt-lg-0'>
                          <p className='card_item_price text-warning'>₹ {item.price}</p>
                        </div>
                        <div className='col-4 col-lg-3 mt-4 mt-lg-0'>
                          <div className='stockCounter' style={{ display: 'flex' }}>
                          <button className='btn btn-dark minus' onClick={() => decreaseqty(item.id)}>-</button>
                            <h6 className='ms-3 me-3'>{item.quantity}</h6>
                            <span
                              className='btn btn-warning plus'
                             onClick={()=>addTocart(item)} 
                            >
                              +
                            </span>
                          </div>
                          <p className='mt-3 text-warning'><b>Total Value:</b> ₹ {item.price * item.quantity}</p>
                        </div>
                        <div className='col-4 col-lg-1 mt-4 mt-lg-0'>
                          <button className='btn btn-outline-info' onClick={() => removeItem(item)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
                <hr />
              </div>
              <div className='col-12 col-lg-3 my-4'>
                <div id='order_summary '>
                  <h4>Order Summary</h4>
                  <hr />
                  <p>
                    Total Count: <span className='order-summary-values text-warning'>{totalCount} products</span>
                  </p>
                  <p>
                    Total Price: <span className='order-summary-values text-warning'>  ₹ {Math.floor(totalPrice)}</span>
                  </p>
                  <hr />
                  {/* <button id='checkout_btn' className='btn btn-warning btn-block'>
                    Check out
                  </button> */}
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};
