import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: ()=>{}
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // Update the State and add meal 
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); // jo index aega upe id check
        const updateItems = [...state.items];

        if (existingCartItemIndex > -1) { // agar item pehle se exist kartaz h aur uski quantity badhani h naki naam baar baar 
            const existingItem = state.items[existingCartItemIndex];
            const updateItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updateItems[existingCartItemIndex] = updateItem;
        } else {
            updateItems.push({ ...action.item, quantity: 1 });
        }

        return {
            ...state,
            items: updateItems
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        // Update the State and remove meal 
          const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
           const existingItem = state.items[existingCartItemIndex];
 
        const updateItems = [...state.items]; // getting the copy of prev state items 
          if(existingCartItemIndex.quantity ===1){ //Remove item if it is the last item in the cart 
          
          updateItems.splice(existingCartItemIndex,1); // 1 simply means removed}
           }
           else{
            const updatedItem={
                ...existingItem, // get no(s) of particular item
                quantity: existingItem.quantity -1
            };
            updateItems[existingCartItemIndex]=updatedItem;
           }
             return {
            ...state,
            items: updateItems
        };
        }
        if(action.type === 'CLEAR_CART'){
            return {...state,items: []};
        }
    return state; //agar upar ke iff block execute nahi hote toh pehle wali state wapis 
}

export function CartContextProvider({ children }) {
   const [cart,dispatchCartAction]= useReducer(cartReducer, { items: [] }); // cartReducer =function valie ; {initial state }
 
   function addItem(item){
    dispatchCartAction({type: 'ADD_ITEM',item})
   }
function removeItem(id){
    dispatchCartAction({type:'REMOVE_ITEM', id})
}
function clearCart(){
    dispatchCartAction({type:'CLEAR_CART'})
}
  const cartContext={
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  }
console.log(cartContext)
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;