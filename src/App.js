import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './style.css';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [userInfo, stateUserInfo] = useState();
  const onSubmit = data => {
    e.preventDefault();
    stateUserInfo(data);
    console.log(data);
  };
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider" />
        <div className="ui form">
          <div className="field">
            <label>UserName</label>

            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register('username', { required: 'UserName is Required' })}
            />
          </div>
          <p>{errors.username?.message}</p>
        </div>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is Required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'enter valid email address'
                }
              })}
            />
          </div>
          <p>{errors.email?.message}</p>
        </div>
        <div className="ui form">
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password is Required',
                minLength: {
                  value: 4,
                  message: 'password less than 3 characters'
                },
                maxLength: {
                  value: 10,
                  message: 'password exceeding 10 characters'
                }
              })}
            />
          </div>
          <p>{errors.password?.message}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}
