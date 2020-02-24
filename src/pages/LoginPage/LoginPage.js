import React, { useState } from 'react';
import classes from './LoginPage.module.css';
import { connect } from 'react-redux';


const LoginPage = (props) => {
  // const [usr, setusr] = useState('');
  const [psw, setPsw] = useState('');

  const submitHandler = (e) => {
    if (psw === '1234') {
      props.submit();
    }

    e.preventDefault();
  }

  return (
    <div className={classes.loginPage}>
      <form className={classes.box} onSubmit={submitHandler}>
        <div className={classes.logo}></div>
        {/* <div className={classes.formGroup}>
          <input
            className={classes.input}
            type="text"
            name="username"
            value={usr}
            placeholder='username'
            onChange={(e) => { setusr(e.target.value) }} />
        </div> */}
        <div className={classes.formGroup}>
          <input
            className={classes.input}
            type="password"
            name="password"
            value={psw}
            placeholder='password'
            onChange={(e) => { setPsw(e.target.value) }} />
        </div>
        <div className={classes.btnWrapper}>
          <button className={classes.loginBtn} type='submit'>LOGIN</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    submit: () => dispatch({ type: 'login' })
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);