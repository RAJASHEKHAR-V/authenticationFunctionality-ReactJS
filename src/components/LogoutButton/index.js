import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <div>
      <button className="logout-button" type="submit" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
