import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const {history} = props
  const onLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
      console.log('login')
    } else {
      console.log('Error')
    }
  }

  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-card">
      <h1 className="login-heading">Please Login</h1>
      <div>
        <button className="login-button" type="submit" onClick={onLogin}>
          Login with sample creds
        </button>
      </div>
    </div>
  )
}

export default Login
