import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {Container} from './styles'

export function Login () {
  return (
    <Container>
      <form action="" id="login-form">
    <Input label="Email: " type="email" placeholder="example@example.com" name="email" autocomplete="email" id="user-email"/>
    <Input label="Password: " type="password" placeholder="********" name="password" autocomplete="password" id="user-password"/>
    <Button type="submit" form="login-form" name="user-submit" text="Login"></Button>
    </form>
    </Container>
  );
}