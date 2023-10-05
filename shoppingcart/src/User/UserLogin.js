// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { addLogin } from '../Slices/loginSlice';
// import { useDispatch } from 'react-redux';


// export const UserLogin = ({user}) => {
//   const dispatch=useDispatch()

//   const navigate=useNavigate()


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault()
//     const loggedInUser = user.find((e) => e.email === email && e.password === password);
//     console.log(loggedInUser);
//     dispatch(addLogin(loggedInUser))
    
//     if (loggedInUser) {
//       alert('Login Successful');
//       navigate('/products')
//     } else {
//       alert('Login Failed');
//     }
//   };
//   const handleButtonClick = () => {
//     // Navigate to the admin page when the button is clicked
//     navigate('/admin/login');
//   };
//   return (
//     <div className='h'>
//       <div className='kk'>
        
//         <form className='pp'>
//           <h2 className='text-center text-warning'>LOGIN</h2>
          
//           <div className="form-outline mb-4">
//             <label className="form-label" htmlFor="form2Example1">EMAIL</label>
//             <input type="email" id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="form-outline mb-4">
//             <label className="form-label" htmlFor="form2Example2">PASSWORD</label>
//             <input type="password" id="form2Example2" className="form-control" onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           {/* ... (other form elements) */}
//           <button className="btn btn-outline-warning btn-block mb-4 w-100" onClick={handleLogin}>SIGN IN</button>
//           <div className="text-center">
//             <p>Not a member? <Link to='/user/register'>Register</Link></p>
//             <button className="btn btn-outline-danger  admin" onClick={handleButtonClick}>
//             Admin LogIn
//             </button>
            
//           </div>
//         </form>
//         </div>
        
//     </div>
    
//   );
// };


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLogin } from '../Slices/loginSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// import './SignIn.css';

export const UserLogin = ({user}) => {
     const dispatch=useDispatch()
  
    const navigate=useNavigate()

  // Reuse the same validation schema as in the sign-up component
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/,
        'Invalid email format'
      )
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Initialize Formik with the same validation schema
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const loggedInUser = user.find(
        (e) => e.email === values.email && e.password === values.password
      );
      console.log(loggedInUser);
      dispatch(addLogin(loggedInUser));

      if (loggedInUser) {
        alert('Login successful');
        navigate('/products');
      } else {
        alert('Login failed');
      }
    },
  });

  const handleButtonClick = () => {
    navigate('/admin/login');
  };
  return (
    <div className='h'>
      <div className='kk'>
        <form className='pp' onSubmit={formik.handleSubmit}>
          <h2 className='text-center text-warning'>LOGIN</h2>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <button className=" btn btn-outline-warning btn-block mb-4 w-100" type="submit">
            SIGN IN
          </button>
          <div className="text-center">
            <p>
              Not a member? <Link to='/user/register'>REGISTER</Link>
            </p>
            <button className='btn btn-outline-danger admin ' onClick={handleButtonClick}>Admin login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
