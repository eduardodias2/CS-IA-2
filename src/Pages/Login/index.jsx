import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { signIn } = useAuth();
  function handleLogin(event) {
    event.preventDefault();
    signIn({
      email: data.email,
      password: data.password
    });
  }
  return (
    <Container>
      <Logo />
      <form id="login-form" onSubmit={handleLogin}>
        <Input
          label="Email: "
          type="email"
          placeholder="example@example.com"
          name="email"
          autocomplete="email"
          id="user-email"
          value={data.email}
          onChange={e =>
            setData(prevData => ({
              ...prevData,
              email: e.target.value
            }))
          }
        />
        <Input
          label="Password: "
          type="password"
          placeholder="********"
          name="password"
          autocomplete="password"
          id="user-password"
          value={data.password}
          onChange={e =>
            setData(prevData => ({
              ...prevData,
              password: e.target.value
            }))
          }
        />
        <Button
          type="submit"
          form="login-form"
          name="user-submit"
          text="Login"
        ></Button>
      </form>
      <p>
        Don't have an account? <a href="/register">Create one now!</a>
      </p>
    </Container>
  );
}
