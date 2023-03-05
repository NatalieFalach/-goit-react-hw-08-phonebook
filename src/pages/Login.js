import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
