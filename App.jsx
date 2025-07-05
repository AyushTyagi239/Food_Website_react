import Header from "./Components/Header.jsx";
import Cart from "./Components/Stores/Cart.jsx";
import Meals from "./Components/Meals.jsx";
import {CartContextProvider} from "./Components/Stores/CartContext.jsx";
import UserProgressContext, { UserProgressContextProvider } from "./Components/Stores/UserProgressContext.jsx";
import CheckOut from "./Components/Stores/CheckOut.jsx";

function App() {
  return (
    <>
    <UserProgressContextProvider> 
    <CartContextProvider>
    <Header/>
    <Meals/>
    <Cart/>
    <CheckOut/>
    </CartContextProvider>
    </UserProgressContextProvider>
  
    </>
  );
}

export default App;
