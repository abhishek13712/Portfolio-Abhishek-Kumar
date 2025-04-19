// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../assest/logo.webp';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { show,hide} from "../redux/Slices/MenuItem";

const Navbar = ()=>{

    const {menu} = useSelector((state) => state);
    const dispatch = useDispatch();
    // const [isClose, setClose]=useState(false);
    const navigate = useNavigate();

    return (
        // w-[150px]
        // width ka kya use kiya ?
        <div className=" bg-white z-30 flex lg:flex-col md:flex-row sm:flex-row  lg:h-screen lg:w-[90px] w-screen h-[90px] justify-between lg:border-r-2 border-b-2 border-black  border-opacity-20 items-center fixed font-ubuntu">
     

     <NavLink to="/">
            <div>
                <div className=" font-shadows font-semibold pt-1 pl-1 bg-bluish w-[50px] h-[50px] rounded-full text-center text-white text-4xl m-4">AK</div>
                </div>
                </NavLink>    
            <div className="flex lg:flex-col flex-row  w-[300px] lg:-rotate-90 text-2xl justify-center items-center">
               <div>Abhishek Kumar</div>
               <div className="text-[15px]  hidden lg:block opacity-50 space-x-60">Web  developer</div>
            </div>

            <div className="m-4 ">
            {
                menu ?
                 (<div> 
                  
                <div onClick={()=>{
                    navigate(-1);
                    dispatch(hide());
                    }}>
                <RxCross1  size={40} color="black"/>
                 </div>
                
                 </div>) 
             : 
            (<div> 
                  <NavLink to="/navigation">
                <div onClick={()=>(dispatch(show()))}>
                <RxHamburgerMenu size={40} color="black" />
                 </div>
                  </NavLink>
                 </div>)
            }

           
            
                
            </div>
      
        </div>
        

    )

}
export default Navbar;

