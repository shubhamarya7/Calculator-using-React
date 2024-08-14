import style1 from "./BtnContainer.module.css";
import Btn from "./Btn";
function BtnContainer ({btns,clicked}){
    function handleclicked(event) {
        // console.log(event.target.innerHTML);
        let btnValue = event.target.innerHTML;
        clicked(btnValue);
        
    }
    return <>
    <div className={style1.btnContainer}>

        {btns.map((btn) => <Btn key={btn} btn = {btn} clicked={handleclicked}></Btn>)} 

    </div>
    </>
}
export default BtnContainer;