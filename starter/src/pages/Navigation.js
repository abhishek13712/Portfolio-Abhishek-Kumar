// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hide } from "../redux/Slices/MenuItem";


const Navigation=()=>{
    const dispatch = useDispatch();
    return (
        <div className=" flex  flex-col ml-[170px] h-screen item-center justify-center overflow-hidden">
           
           <div className=" flex flex-col gap-[50px] text-4xl">
           <div onClick={()=> dispatch(hide())} className="hover:translate-x-3 transition-transform duration-500 ease-in-out ">
            <NavLink to="/">
                <div>
                HOME
                </div>
            </NavLink>
            </div>

            <div onClick={()=> dispatch(hide())} className="hover:translate-x-3 transition-transform duration-500 ease-in-out ">
            <NavLink to="/about">
                <div>
               ABOUT
                </div>
            </NavLink>
            </div>
            
            <div onClick={()=> dispatch(hide())}  className="hover:translate-x-3 transition-transform duration-500 ease-in-out ">
            <NavLink to="/skills">
                <div>
               SKILL & RESUME
               </div>
            </NavLink>
            </div>
            
            <div onClick={()=> dispatch(hide())}  className="hover:translate-x-3 transition-transform duration-500 ease-in-out ">
            <NavLink to="/contact">
                <div>
               CONTACT 
               </div>
            </NavLink>
            </div>
            
           


         
            
            
      
           </div>
           </div>
    )
}
export default Navigation;
