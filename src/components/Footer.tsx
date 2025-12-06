import React from "react"



const Footer:React.FC = function(){
    const currentYear = new Date().getFullYear()
    return (
        <div className=".footer">
            <div className="container">
            <p>© {currentYear} Food Truck Paradise. Tous droits réservés.</p>
        </div>

        </div>
    )
}

export default Footer 