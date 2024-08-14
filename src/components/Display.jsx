import style1 from "./Display.module.css";

function Display ({initialValue}){
    return (<div>
        <input className={style1.display}  type="text" placeholder="Enter Number" value={initialValue} readOnly/> 
        </div>)
}
export default Display;