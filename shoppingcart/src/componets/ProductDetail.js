import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { add, decreaseQty, increaseQty } from '../Slices/cartItem';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css'



export const ProductDetail = ({ productss, status, cartitem, count }) => {
  const dispatch = useDispatch()
  const navigate=useNavigate()



  const addToCart = (product) => {
    const existingItem = cartitem.find((item) => item.id === product.id);
    

    if (existingItem) {
      dispatch(increaseQty(product.id))
    } else {
      dispatch(add(product));
      dispatch(increaseQty(product.id))
      toast.dark(`Item is added to the cart!`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }
  const { id } = useParams();
  const product = productss.find((product) => product.id === parseInt(id));
  console.log("product", product);
  if (!product) {
    return <div>User not found</div>;
  }

  const handleButtonClick = () => {
    navigate('/products');
  };
  return (
    <div className='pro'>
      <button className='btn btn-outline-warning ' onClick={handleButtonClick}> 
        {/* <Button variant='outline-warning' className='w-50' onClick={handleButtonClick}>BACK</Button> */}
           BACK
      </button>
      <div className="row f-flex justify-content-around container ms-sm-5">
        <div className="col-12 col-lg-4 img-fluid" id="product_image">
        
          <img className="d-block w-75 h-50   mt-5" src={product.image} alt={product.name} />
        </div>

        <div className="col-12 col-lg-4 mt-5">
          <h3>{product.name}</h3>
          <p className='product_id text-warning'><b>PRODUCT NO {product.id}</b></p>
          <hr />
          <p id="product_id"><b>Item</b> {product.title}</p>
          <hr />
{/* <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{product.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{product.somedata}	</span></p> */}
          <span style={{background:"red",color:"black",padding:"9px 12px",borderRadius:"5px"}}>{product.rating.count} Reviews</span><hr/>
          <span style={{background:"green",color:"#fff",padding:"7px 12px",borderRadius:"5px"}}>★ {product.rating.rate} </span>
          <hr />
          <p id="product_price"><b>Price</b> - ₹{product.price}</p>
          {/* <div className="stockCounter " style={{display:"flex"}}>
            <span className="btn btn-warning minus" onClick={() => dispatch(decreaseQty(product.id))} >-</span>
            <h2 className='me-3 ms-3'>{product.quantity}</h2>
            {console.log(product)}
            <span className="btn btn-success" onClick={() => dispatch(increaseQty(product.id))} >+</span>
          </div> */}
          {/* <br></br>
          <button id="review_btn" type="button" className="btn btn-outline-warning mt-4 w-50" onClick={() => addToCart(product)} >
            Add to Cart
          </button> */}
          <hr />
          <h4 className="mt-2 text-warning">Description:</h4>
          <p>{product.description}</p>
          <hr />
        
        </div>
        
      </div>
    </div>
  )
}
