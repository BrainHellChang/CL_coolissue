import React from 'react'
import '../css/login.css'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    // 폼 데이터 처리 로직 작성
    // console.log('email:', email);
    // console.log('Email:', email);
  };

  const toJoin = () => {
    navigate("/join");
  }

  return (
    <div>
      <div className='login-container'>
        <div className="login-box">
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input type="text" name="" required=""/>
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required=""/>
              <label>Password</label>
            </div>
            <button className='login-btn' type="submit" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              로그인
            </button>
            <button className='join-btn' onClick={toJoin}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login
