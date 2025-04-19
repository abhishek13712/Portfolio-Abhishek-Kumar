import React from 'react'
// import Resume from '../assest/ResumeImage.jpg';
import { NavLink } from 'react-router-dom';
import { IoMdSend } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { CiMail } from "react-icons/ci";
const Resume="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744985928/ResumeImage_tqjoje.jpg"

function Skills() {
  return (
    <div className='flex flex-col  relative  overflow-hidden w-full'>
    <div className='w-full flex  ml-8 text-5xl mt-4'>
        <div>Skills</div>
    </div>
        <div className='relative flex flex-col gap-6 mt-12 ml-10'>
        <div>
            <p className='text-xl font-medium'>Programming Lnaguages :</p>
            <div className=' mt-2 w-[230px] border-b-2 border-black  hover:cursor-pointer'>
           </div>
            <div className='flex flex-row ml-8'>
            {/* <div className='text-3xl font-medium'>:</div> */}
            <div className='ml-2 mt-2 w-[90%] lg:w-[40%] text-bluish text-[15px]'> C ,C++ ,Javascript</div>
            </div>
           
        </div>
        <div>
        <p className='text-xl font-medium'>Technologies  :</p>
        <div className=' mt-2 w-[120px] border-b-2 border-black  hover:cursor-pointer'>
           </div>
        
        <div className='flex flex-row ml-8'>
            {/* <div className='text-3xl font-medium'>:</div> */}
            <div className='ml-2 mt-2 w-[90%] lg:w-[40%] text-bluish text-[15px]'>  React.js  ,Node.js ,Express.js ,MongoDb ,Tailwind ,Html ,CSS ,Cloudinary.</div>
            </div>
        
        </div> 
        <div>
        <p className='text-xl font-medium'>Relevant coursework : </p>
        <div className=' mt-2 w-[200px] border-b-2 border-black  hover:cursor-pointer'>
           </div>
        <div className='flex flex-row ml-8'>
            {/* <div className='text-3xl font-medium'>:</div> */}
            <div className=' ml-2 mt-2 text-bluish text-[15px] w-[90%] lg:w-[40%]'> Object oriented porgramming(OOPS),  Database Mangenent(DBMS),  Algorithms and Analysis(ADA),  Operating Sysytem(OA),  Computer Graphics(CG),  Computer Networks(CN),  Artifical inteligence(AI)</div>
            </div>
       
        </div>
        <div className='w-full flex '>
            <button className= " absolute  pr-8 pl-6  pt-2 pb-2 opacity-80  bg-bluish text-white border-2 flex items-center hover:opacity-100 justify-center   "> 
                  <div className="  flex flex-row gap-4 ">
                 
                    <div className="">
                    {/* <FaGithub className="relative top-1 text-[40px]"/> */}
                    </div>
                    <a target='blank' href=' https://drive.google.com/file/d/1XTtWSTHyvQlH1-DC5RFdlB3GYmznz20W/view?usp=drive_link'><div className=" text-[30px]"><p>RESUME</p></div></a>

                    
                    
                    
                  </div>
                  
                  </button> 
        </div>

        </div>
        {/* hidden lg:block h-screen w-1/2 fixed -right-10 top-0 bg-white z-0 */}
        

        {/* footer */}

        <div className="lg:w-[104%] w-screen  opacity-80 mt-16 overflow-hidden">
                       <footer className=" flex text-white  flex-col flex-wrap relative gap-10 text-sm top-[20px]  bg-brownish lg:pl-16 pl-16 pt-16 pb-9  w-full">
                         <div className=" flex flex-row flex-wrap gap-20 lg:w-[400px] w-[80%]">
                 
                            {/* left side footer */}
                           <div className="w-2/3 space-y-6">
                             <p className="text-xl">ABOUT ME</p>
                 
                             <div>
                             <p className=" opacity-80  w-[100%] lg:w-[170%] ">
                             I'm a full stack developer passionate about building scalable web applications. I enjoy solving problems, writing clean code, and continuously learning to grow my skills across frontend and backend technologies.                              </p>
                         
                 
                             <p className=" mt-4 text-3xl font-pacifico ">Abhishek  Kumar</p>
                             </div>
                           </div>
                 
                           {/* right side footer */}
                           <div  className=" space-y-6">
                            <p className="text-xl w-full">
                             NAVIGATION
                            </p>
                  
                           <ul className=" space-y-4 cursor-pointer">
                           <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[33%] hover:text-white hover:opacity-100'>
                           
                           <li className=''>
                           <NavLink to='/'>
                           Home
                           </NavLink>
                           </li>
                          
                           
                            </div>
                            <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[35%] hover:text-white hover:opacity-100'><li><li className=''>
                           <NavLink to='/about'>
                          About
                           </NavLink>
                           </li></li></div>
                            <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[35%] hover:text-white hover:opacity-100'><li><li className=''>
                           <NavLink to='/skills'>
                           Skills
                           </NavLink>
                           </li> </li></div>

                            <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[43%] hover:text-white hover:opacity-100'><li><li className=''>
                           <NavLink to='/contact'>
                          Contact
                           </NavLink>
                           </li></li></div>
                           </ul>
                            </div>
                  
                          {/* </div> */}
                  
                          <div className="flex flex-col w-1/3 relative  gap-6 ">
                            <p className="text-xl">CONTACTS</p>
                            <div className=" space-y-4">
                            <div className="opacity-90 flex flex-row gap-2">
                            {/* icons */}
                            <MdMyLocation className='text-xl' />
                            <div className='opacity-90 border-b hover:border-b hover:border-white border-[#768591] w-[80%] hover:text-white hover:opacity-100'>
                             <a href="https://www.google.com/maps/place/New+Delhi" target="_blank" className=''>New Delhi, India
                   </a>
                   </div>
                             </div>
                             <div className="opacity-90 flex flex-row  gap-2">
                             {/* icons */}
                             <CiMail className='text-xl' />
                             <a href="mailto:abhishek375444@gmail.com" className='opacity-90 border-b hover:border-b hover:border-white border-[#768591] w-[77%] hover:text-white hover:opacity-100'>abhishek375444@gmail.com</a>
                             </div>
                  
                             <div className=' mt-6 w-[194px] border-b-2 border-white border-opacity-30 hover:border-opacity-100 hover:cursor-pointer'>
                             <a  href='https://www.linkedin.com/in/abhishek-kumar-234b802a4' target="_blank" className='text-[16px]'>Conect with me on linkden</a>
                             </div>
                   
                             </div>
                  
                             </div>
                             </div>
                             <div>
                             <div className="w-[83%] mb-4 mt-10 bg-white opacity-30 h-[1px]">
                  
                  </div>
                 <div className='space-x-2'>
                 <span className="text-xs opacity-70">Made with love by </span>
                 <span>' Abhishek Kumar '</span>
                 
                 </div>
                 
                 
                            </div>
                         
                         
                       </footer>
                       </div>


                       <div className=' hidden fixed lg:block right-0 top-0 w-1/2 h-screen z-10'>
            <img src={Resume} className='w-full h-full'/>
        </div>

        
    </div>
  )
}


export default Skills