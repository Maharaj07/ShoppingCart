import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const AdminLogin = ({adminLogin}) => {
    const dispatch=useDispatch()

    const navigate=useNavigate()
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault()
      // const loggedInAdmin = adminLogin.find((e) => e.email === email && e.password === password);
      // console.log(loggedInAdmin);
    //   dispatch(addLogin(loggedInUser))
      
      if (true) {
        alert('Login Successful');
        navigate('/admin')
      } else {
        alert('Login failed');
      }
    };
  
    return (
      <div className='n'>
        <div className='kk'>
          <form className='pp'>
            <h2 className='text-center text-warning'>ADMIN</h2>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">EMAIL</label>
              <input type="email" id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">PASSWORD</label>
              <input type="password" id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* ... (other form elements) */}
            <button className="btn btn-outline-warning btn-block mb-4 w-100" onClick={handleLogin}>SIGN IN</button>
            <div className="text-center">
              {/* <p>Not a member? <Link to='/user/register'>Register</Link></p> */}
            </div>
          </form>
        </div>
      </div>
    );
  
}
