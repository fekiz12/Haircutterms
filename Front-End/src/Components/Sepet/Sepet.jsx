import React from 'react';
import "../Sepet/Sepet.css";
import { StoreContext } from '../../Context/StoreContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Sepet = () => {
    const { cartItems, urunList, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr className='sepet-hr'></hr>
                {urunList && urunList.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={url + "/images/" + item.image} alt={item.name}></img>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className='cart-bottam'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>{getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/placeorder")}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>If you have a promo code, enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type='text' placeholder='promo code'></input>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sepet;
