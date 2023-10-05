import React from 'react'
import { useDispatch } from 'react-redux';
import '../App.css';
import { useEffect } from 'react';
import { fetchProducts } from '../Slices/ProductsSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  increaseQty } from '../Slices/cartItem';
import { toast } from 'react-toastify';
import '../App.css'
import { addd } from '../Slices/UsersSlice';

export const Products = ({productss,status,cartitem,user,userLogin}) => {

    const addToCart=(product)=>{
    //     const existingItem = cartitem.find((item) => item.id === product.id);
    //     console.log(user);
    //     console.log(userLogin);
    //     console.log(product);
    // if (existingItem) {
    //     dispatch(increaseQty(product.id))
    // } else {
        dispatch(addd({login:userLogin,cart:{...product,quantity:1}}));
        // dispatch(increaseQty(product.id))
    }
    // }


    console.log(productss);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const userss = productss.map((val, index) => (
        
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 container element " key={val.id} style={{marginBottom:"40px"}}>
                <Card className='text-center h-100 pt-3 pb-2'  >
                    <Link to={`/product/${val.id}`}>
                    <Card.Img variant="top" src={val.image} style={{width:"100px",height:"130px"}} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                            Price - ${val.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{background:'black'}}>
                         <Button variant='outline-warning' className='w-30' onClick={()=>addToCart(val)}>Add To  Cart</Button>
                    </Card.Footer>
                </Card>
            </div>
            
    ));



    return (
        <div>    <div className="container mt-4">
            <div className="row">
                {status === 'loading' ? <h2>loading.....</h2> : userss}
            </div>
          
        </div>
        </div>


    );
}
