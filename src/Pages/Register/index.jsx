import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import {Container} from './styles'

export function Register () {
  return (
    <Container>
      <Logo />
      <form action="" id="login-form">
    <Input label="Email: " type="email" placeholder="example@example.com" name="email" autocomplete="email" id="user-email"/>
    <Input label="Password: " type="password" placeholder="********" name="password" autocomplete="password" id="user-password"/>
    <Button type="submit" form="login-form" name="user-submit" text="Register" method="GET"></Button>
    
    </form>
    <p>Already have an account? <a href="/">Login instead!</a></p>
    </Container>
  );
}