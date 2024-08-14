import style1 from "./Btn.module.css";
function Btn ({btn,clicked}){
    return <>
    <button className={style1.btn} onClick={clicked} >{btn}</button>
    </>
}
export default Btn;