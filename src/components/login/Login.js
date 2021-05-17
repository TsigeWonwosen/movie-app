import React, { useState } from 'react';

import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import ReactHelmet from '../../util/ReactHelmet';

function Login() {
  let history = useHistory();

  const [hasAccount, setHasAccount] = useState(true);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');

  const { currentUser, signUp, signIn } = useAuth();
  // console.log(currentUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirm } = user;
    if (hasAccount) {
      await signIn(email, password);
      if (currentUser?.email) {
        history.push('/');
      } else {
        setError(currentUser?.message);
        history.push('/login');
      }
      return;
    } else {
      if (password !== confirm) {
        return setError('password is not the same.');
      }
      signUp(email, password);
      history.push('/');
    }
  };
  return (
    <Wrapper>
      <FormWrapper>
        <ReactHelmet title={hasAccount ? 'Login' : 'Register'} />
        <Title>{hasAccount ? 'Login' : 'Register'}</Title>
        {error && error}
        <Form onSubmit={handleSubmit}>
          {!hasAccount && (
            <Input
              type="text"
              name="username"
              placeholder="User Name"
              onChange={handleChange}
            />
          )}
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {!hasAccount && (
            <Input
              type="password"
              name="confirm"
              placeholder="Password Confirmation"
              onChange={handleChange}
            />
          )}
          <Button type="submit">{hasAccount ? 'Login' : 'Register'}</Button>
        </Form>
        <Title2>
          {hasAccount ? (
            <>
              Don't have an account?
              <Info onClick={() => setHasAccount(!hasAccount)}>Register</Info>
            </>
          ) : (
            <>
              Already have an account?
              <Info onClick={() => setHasAccount(!hasAccount)}>Sign in</Info>
            </>
          )}
        </Title2>
      </FormWrapper>
    </Wrapper>
  );
}

export default Login;

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const FormWrapper = styled.section`
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: #222561;
  border-radius: 1rem;
`;
export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 4px 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #f2494d;
  color: #fff;
  border: none;
  outline: none;
  padding: 5px 4px;
  border-radius: 10px;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #f4f4f4;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #f4f4f4;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${(props) => props.color || '#4d4d4d'};
`;

export const Info = styled.span`
  font-family: 'Raleway', sans-serif;
  color: #f2494d;
  margin-left: 0.5rem;
  cursor: pointer;
`;
