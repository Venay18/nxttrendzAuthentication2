// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Products = () => {
  const data = Cookies.get('jwt_token')
  if (data === undefined) {
    return <Redirect to="./login" />
  }
  return (
    <div>
      <h1>Products</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
    </div>
  )
}

export default Products
