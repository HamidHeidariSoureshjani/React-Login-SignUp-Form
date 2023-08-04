import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

import { validate } from './validate';
import { notify } from './toast';
import styles from "./SignUp.module.css"

const SignUp = () => {

  const [data, setData] = useState({
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false
  })

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"))
    document.title = "Sign Up"
  }, [data, touch])

  const changeHandler = event => { 
    if (event.target.name === "isAccepted") {
      setData({...data, [event.target.name] : event.target.checked })
    } else {
      setData({...data, [event.target.name] : event.target.value })
    }
    // console.log(data);
  }

  const focusHamdler = event => {
    setTouch({...touch, [event.target.name] : true})
  }

  const submitHandler = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
        notify ("You signed up successfully" , "success")
    } else {
        notify ("Invalid data!" , "error")
        setTouch({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            isAccepted: true
        }
        )
    }
  }

  return (
    <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
      <h1 className={styles.header}>Sign Up Form</h1>
      <div className={styles.formField}>
        <label>Name</label>
        <input
            className={(errors.name && touch.name) ? styles.uncompleted : styles.formInput}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler} onFocus={focusHamdler}/>
        {errors.name && touch.name && <span>{errors.name}</span>}
      </div>
      <div className={styles.formField}>
        <label>Email</label>
        <input
            className={(errors.email && touch.email) ? styles.uncompleted : styles.formInput}
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHamdler}/>
        {errors.email && touch.email &&<span>{errors.email}</span>}
      </div>
      <div className={styles.formField}>
        <label>Password</label>
        <input
            className={(errors.password && touch.password) ? styles.uncompleted : styles.formInput}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHamdler}/>
        {errors.password && touch.password &&<span>{errors.password}</span>}
      </div>
      <div className={styles.formField}>
        <label>Confirm Password</label>
        <input
            className={(errors.confirmPassword && touch.confirmPassword) ? styles.uncompleted : styles.formInput}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHamdler}/>
        {errors.confirmPassword && touch.confirmPassword &&<span>{errors.confirmPassword}</span>}
      </div>
      <div className={styles.formField}>
        <div className={styles.checkBoxContainer}>
            <label>I Accept Terms of Privacy Policy</label>
            <input
                className={(errors.isAccepted && touch.isAccepted) ? styles.uncompleted : styles.formInput}
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                onFocus={focusHamdler}/>
        </div>
            {errors.isAccepted && touch.isAccepted &&<span>{errors.isAccepted}</span>}
        </div>
      <div className={styles.formButtons}>
        <Link to='/login'>Login</Link>
        <button type='submit'>Sign Up</button>
      </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
