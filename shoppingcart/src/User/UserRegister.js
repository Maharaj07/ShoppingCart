// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {useDispatch} from 'react-redux'
// import { addUser } from '../Slices/UsersSlice'

// export const UserRegister = ({user}) => {
//   const dispatch=useDispatch()
//   const [name,setName]=useState()
//   const [email,setemail]=useState()
//   const [password,setPassword]=useState()
// const handleSumit = (e) => {
//   e.preventDefault();
//   dispatch(addUser({ id: user.length+1, name, email, password,cartitem:[] }));
//   setName('');
//   setPassword('');
//   setemail('');
// };

//   return (
//     <div className=' k'>
//     <div className='kk'>
//     <form className='ppp'>
//     <h2 className='text-center text-warning '> REGISTER </h2>
//       <div className="form-outline mb-4">
//         <label className="form-label" for="form2Example1">NAME</label>
//         <input type="text" id="form2Example1" onChange={(e)=>setName(e.target.value)} value={name}  className="form-control" />
//       </div>
//       <div className="form-outline mb-4">
//         <label className="form-label" for="form2Example2">EMAIL</label>
//         <input type="email"   id="form2Example2"  onChange={(e)=>setemail(e.target.value)} value={email} className="form-control" />
//       </div>
//       <div className="form-outline mb-4">
//         <label className="form-label" for="form2Example2">PASSWORD</label>
//         <input type="password"   id="form2Example2"  onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" />
//       </div>
//       <div className="row mb-4">
//           <div className="col d-flex justify-content-center">
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
//               <label className="form-check-label" for="form2Example34"> Remember me </label>
//             </div>
//           </div>
//           <div className="col">
//             <a href="#!">Forgot password?</a>
//           </div>
//         </div>
//       <button type="submit" className="btn btn-outline-warning btn-block mb-4 w-100" onClick={handleSumit}>Sign in</button>
//       <div className="text-center">
//         <p>Already a member? <Link to='/'>Login</Link></p>
//         {/* <button onClick={handleLogout}>Logout</button> */}
       
        
//       </div>
//     </form>
//     </div>
//   </div>
//   )
// }




import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Slices/UsersSlice'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../App.css'

export const UserRegister = ({user}) => {
     const dispatch=useDispatch()

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/,
        'Invalid email format'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Dispatch your addUser action or any other logic here
      dispatch(addUser({ id: user.length + 1, ...values, cartitem: [] }));
      formik.resetForm(); // Reset form after submission
    },
  });

  return (
    <div className='k'>
      <div className='kk'>
        <form className='ppp' onSubmit={formik.handleSubmit}>
          <h3 className='text-center text-warning '> REGISTER </h3>
          <div className="form-outline">
            <label className="form-label" htmlFor="name">
              USER NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`form-control ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="form-control"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-outline-warning btn-block mb-4 w-100"
          >
            SIGN UP
          </button>
          <div className="text-center">
            <p>
              Already a member? <Link to='/'>LOGIN</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
