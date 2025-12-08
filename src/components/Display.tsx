import { useState } from "react";




function Display(){

    // creer un input qui affiche en temps reel se que entre 
    const[value, setValue] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };

/* 
      Une autre alternative serait de se placer sur input 
      <input Onchange = {(e)=> setValue(e.target.value)}

*/
    

    return(
       
       <div>
            <p> {value}</p>

            <form action="">
                <input  type="text" name="text" className="display" onChange={handleChange} placeholder="Ecrit ici" />
            </form>
       </div>
    )
}

export default Display