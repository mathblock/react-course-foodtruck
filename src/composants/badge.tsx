import {  Globe, Icon, type LucideIcon } from "lucide-react";

export const Badge= (props:{Icon:LucideIcon,text:string, green?:boolean})=>{
    const styles={
    container:{
        padding:'4px 8px',
        backgroundColor: props.green?'#e0e0e0':'green',
        borderRadius:'12px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        gap:'4px'
    }
}
    return (
        <div className="badge-container" style={styles.container}>
            <props.Icon className="badge-icon" />
            <span className="badge-text">{props.text}</span>
        </div>
    )
}

