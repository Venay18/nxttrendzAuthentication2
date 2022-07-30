// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Cart = () => {
  const data = Cookies.get('jwt_token')
  if (data === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <h1>Cart</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    </div>
  )
}

export default Cart
