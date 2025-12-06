
import './Cardpoduct.css'


export interface Product {

    name : string ,
    url : string,
    price : number
}



export default function Cardpoduct({product}:{product:Product}) {

    return (
        <div className="card">
            <h2> Name: {product.name} </h2>
            <img src={product.url} alt=" image d'un Tacos " />
            <h2>price : {product.price} </h2>
        </div>
    )
}