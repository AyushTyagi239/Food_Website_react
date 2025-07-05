import { currencyFormatter } from "../../Util/Formating"
export default function CartItem({name,quantity,price,onIncrease,onDecrease}){
    const Q = quantity;
return(
    
<li className="cart-item">

    <p>
        
    {name} - ({Q})*{currencyFormatter.format(price)}
    </p>
    <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>

    </p>
</li>
)
}