import { useState } from 'react'





function Compteur(){

    const [count,setCount] = useState(0)

    const increment = (e:React.MouseEvent<HTMLButtonElement>) => {

        switch (e.currentTarget.id) {
            case 'first':
                setCount(count + 1)
                break;

            case 'second':
                setCount(count + 10)
            break;

            case 'thirst':
                setCount(count - 1)
                break;

            case 'reset':
                setCount(0)
                break;
            
            default:
                break;
        }

            
    } 
    

    return(

        <div>
            <p>Compteur : {count}</p>
            <button id = 'first' onClick={increment}>Incrementer + 1</button>
            <button id = 'second' onClick={increment}>Incrementer + 10</button>
            <button id ='thirst'onClick={increment}>Decrementer - 1</button>
            <button onClick={()=>setCount(count+2)}>Incrementer + 2</button>
            <button id='reset' onClick={increment}>Reset</button>
        </div>
    )


}
export default Compteur