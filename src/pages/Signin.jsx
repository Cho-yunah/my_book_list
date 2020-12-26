import { Redirect } from 'react-router-dom';
import Signin from '../components/Signin';
import withToken from '../hocs/withToken';

function SigninPage({ token }) {
  // console.log(props); // {unrelated props, token}

  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <Signin />;
}

export default withToken(SigninPage);
