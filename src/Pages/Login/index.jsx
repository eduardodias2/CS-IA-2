import { Input } from '../../components/Input';
import {Container} from './styles'

export function Login () {
  return (
    <Container>
    <Input label="Email: " type="email" placeholder="example@example.com" name="email" autocomplete="email" id="user-email"/>
    <Input label="Password: " type="password" placeholder="********" name="password" autocomplete="password" id="user-password"/>
    </Container>
  );
}