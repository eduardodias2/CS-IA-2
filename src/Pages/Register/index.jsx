import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import {Container} from './styles'
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Register () {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });
  async function handleRegister (event) {
    event.preventDefault()
    await api.post("/register", {
      ...data
    })
    navigate("/")
  }
  return (
    <Container>
      <Logo />
      <form id="login-form" onSubmit={handleRegister}>
    <Input label="Username: " type="text" placeholder="Name" required name="username" id="user-name" value={data.username}
          onChange={e =>
            setData(prevData => ({
              ...prevData,
              username: e.target.value
            }))
          }/>
    <Input label="Email: " type="email" placeholder="example@example.com" name="email" autocomplete="email" id="user-email" value={data.email}
          onChange={e =>
            setData(prevData => ({
              ...prevData,
              email: e.target.value
            }))
          }/>
    <Input label="Password: " type="password" placeholder="********" name="password" autocomplete="password" id="user-password" value={data.password}
          onChange={e =>
            setData(prevData => ({
              ...prevData,
              password: e.target.value
            }))
          }/>
    <Button type="submit" form="login-form" name="user-submit" text="Register"></Button>
    
    </form>
    <p>Already have an account? <a href="/">Login instead!</a></p>
    </Container>
  );
}