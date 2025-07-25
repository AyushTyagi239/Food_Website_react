 import { useContext } from "react";
 import Modal from "../UI/Modal.jsx";
 import CartContext from "./CartContext.jsx";
 import { currencyFormatter } from "../../Util/Formating.js";
import Button from "../UI/Button.jsx";
import UserProgressContext from "./UserProgressContext.jsx";
import CartItem from "./CartItems.jsx";
  
 export default function Cart(){
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)
  const cartTotal = cartCtx.items.reduce(
    (totalPrice,item)=> totalPrice + item.quantity*item.price,
    0 
  );
  function handleCloseCart(){
    userProgressCtx.hideCart();
  }
  function handleGoToCheckout(){
    userProgressCtx.showCheckout();
  }
  return(
    <Modal className="cart" open={userProgressCtx.progress ==='cart'}>
    <h2>Your Cart</h2>
    <ul>
        {cartCtx.items.map((item)=>(
            <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={()=>cartCtx.addItem(item)}
            onDecrease={()=>cartCtx.removeItem(item.id)}
            />
        ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <Button textOnly onClick={handleCloseCart}>Close</Button>
    {cartCtx.items.length > 0 &&(<Button onClick={handleGoToCheckout} > Checkout </Button>) }
    
    </Modal>
  )
 }