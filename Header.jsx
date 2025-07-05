import logoImg from '../assets/logo.jpg';
import CartContext from './Stores/CartContext.jsx';
import Button from './UI/Button.jsx';
import{useContext} from 'react'
import UserProgressContext from './Stores/UserProgressContext.jsx';
export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx= useContext(UserProgressContext)
    const totalCartItems=cartCtx.items.reduce((totalNumberOfItems, item)=>{
        return totalNumberOfItems + item.quantity;
    },0);
     function handleShowCart (){
        userProgressCtx.showCart();
     }
    return(
        <header id="main-header">
        <div id="title">
            <img src={logoImg} alt=" A restraunt " />
            <h1> FOODY🍽️BUDDY</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}> Cart 🛒({totalCartItems}) </Button>
        </nav>

        </header>
    )
}