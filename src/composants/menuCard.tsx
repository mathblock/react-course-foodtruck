import { Globe, Vegan } from "lucide-react";
import type Menu from "../types/menu";
import { Badge } from "./badge";
import '../styles/menuCard.css'
import type { CartItem } from "../types/cart";


export const Menucard= (props:Menu & {addToCart: (menuId: CartItem) => void})=>{
    return (
        <div className="card_container">
            <div className="card-header">
                <img height={220} src={props.imageUrl} alt={props.name}/>
            </div>
            <div className="card_content">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <p>{props.price.toFixed(2)}</p>
                <div className="card_footer">
                    <div className="badges">
                        {props.isVegetarian && <Badge Icon={Vegan} text="Vegetarian" green />}
                        {props.isNew && <Badge Icon={Globe} text="New"  />}
                    </div>
                    <div className="order_button">
                        <button onClick={() => props.addToCart({ item: props, quantity: 1 })}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}