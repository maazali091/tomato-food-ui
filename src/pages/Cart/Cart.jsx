import React from 'react'
import { assets } from '../../assets/assets'
import food_1 from '../../assets/food_1.png'
import food_2 from '../../assets/food_2.png'
import './Cart.css'

function Cart() {
  return (
    <div className='cart'>
        <div className="table">
            <table>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={food_1} alt="" /></td>
                    <td>Lasagna Rolls</td>
                    <td>$14</td>
                    <td><input type="number" value={1} /></td>
                    <td>$14</td>
                    <td><img src={assets.cross_icon} className='remove' alt="" /></td>
                </tr>
                <tr>
                    <td><img src={food_2} alt="" /></td>
                    <td>Lasagna Rolls</td>
                    <td>$18</td>
                    <td><input type="number" value={2} /></td>
                    <td>$36</td>
                    <td><img src={assets.cross_icon} className='remove' alt="" /></td>
                </tr>
            </tbody>
        </table>
        </div>


        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Totals</h2>
                <div className="subtotal">
                    <h4>Subtotal</h4>
                    <p>$12</p>
                </div>
                <hr />
                <div className="delivery">
                    <h4>Delivery Fee</h4>
                    <p>$2</p>
                </div>
                <hr />
                <div className="total">
                    <h3><b>Total</b></h3>
                    <h4><b>$14</b></h4>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="promo">
                <h4>If you have a promo code, enter it here</h4>
                <div className="code">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart