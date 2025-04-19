
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Navbar from "./components/Navbar"
// import profile from '../assest/profile.jpeg';
// import { IoMdSend } from "react-icons/io";
// import leetcodeImage from '../assest/leetcodeImage.png';
// import engiImage from '../assest/engiImage.jpeg';
import { NavLink } from "react-router-dom";
import { MdMyLocation } from "react-icons/md";
import { CiMail } from "react-icons/ci";
const profile= "https://res.cloudinary.com/dxyygkfd9/image/upload/v1745044646/ads_photo-removebg-preview_u7e1ac.png"
const leetcodeImage="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744985957/leetcodeImage_khdman.png"
const engiImage="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744985957/engiImage_vkn3rj.jpg"

const Home =()=>{
    return (
        <div className=' flex flex-col overflow-hidden '> 
        <div className='flex lg:flex-row flex-col w-full lg:h-screen items-center justify-between lg:ml-16'>
            <div className='lg:w-1/2 w-[90%]  mt-10 lg:mt-0 '>
                <div className=''>
                    <div className='text-5xl font-medium '>HELLO!</div>
                    <div className='text-5xl font-medium'>NICE TO MEET YOU</div> 
                    <p className='opacity-60 mt-4 w-full lg:w-[70%] '> I,m currently a third-year undergraduate at Delhi Technological University (DTU), I'm an aspiring Software Engineer passionate about building cool things. Welcome to my portfolio showcasing my projects and skills! </p> 
                </div>

            </div>
            <div className='w-1/2 '>
                <img src={profile}  alt="Logo" className="lg:w-screen lg:h-screen h-[400px] w-[400px] object-contain" />
                </div>


        </div> 
         {/* about */}

         <div className=' mt-10  mb-10  lg:mr-16 lg:ml-16 mr-6 ml-6'>
         <div className='text-4xl'>ABOUT ME</div>
         <div className="opacity-60 mt-4">I'm a third-year undergraduate student at Delhi Technological University (DTU), passionate about software development and problem-solving. In my first year, I actively explored various domains through participation in multiple college societies, which gave me a broad perspective and helped me identify my true interests. In my second year, I focused on strengthening my problem-solving abilities by consistently practicing data structures and algorithms. Now, in my third year, I'm applying that logical foundation to enhance my full-stack development skills and build real-world applications. </div>
           <div className='opacity-60 mt-4'>I enjoy working across the tech stack—from crafting responsive frontends to building efficient backends. I've also gained valuable experience in team collaboration and leadership through various responsibilities, which helped me develop strong communication and time management skills. I'm driven by curiosity, growth, and a desire to create impactful tech solutions.</div>
          <div className=' mt-6 w-[245px] border-b-2 border-black border-opacity-30 hover:border-opacity-100 hover:cursor-pointer'>
          <a  href='https://www.linkedin.com/in/abhishek-kumar-234b802a4' target="_blank" className='text-xl'>Conect with me on linkden</a>
          </div>
          
          {/* <div className='w-[250px] h-[2px] opacity-50 bg-black  hover:opacity-100'></div> */}
          <div></div>

         </div>
         
         {/* message */}
         <div className='w-full opacity-90  bg-bluish relative mt-6'>
         <div  className=' absolute lg:top-[6%] lg:left-[20%]  left-[8%] top-[4%] '>
        <img src="https://cdn.prod.website-files.com/5c15cd8c8f69207532f75856/5c15cd8c8f6920262ff7594c_quote-icon-white.svg"/>         
          </div>
         <div className='lg:w-1/2 w-[70%] mt-10 mb-10  mx-auto lg:text-2xl text-[12px] text-white'>It's easy to follow the crowd, especially when you see your peers heading in one direction. But growth comes from exploring different paths and making choices that reflect your own journey. The decisions we make, how we manage time across different priorities, the mistakes we commit, and the lessons we take from them, all shape us into better individuals. Social pressures, generational expectations, and timing may influence us, but ultimately, the ball is always in our court. No matter the circumstances, we are the ones taking the final shot, and that sense of ownership defines our personal growth. </div>

         </div>



         {/* leetcode  */}
         <div className='flex lg:flex-row flex-col gap-5 mt-20 mb-20  lg:mr-16 lg:ml-16  mr-6 ml-6'>
         <div className='lg:w-[60%] w-full'>
            <img   src={leetcodeImage} className='h-[80%]'/>
         </div>

         <div className='lg:w-[30%] w-full'>
            <div className='text-3xl'>PROBLEM SOLVING</div>
            <div className='opacity-60 lg:mt-10 mt-6'>I am a dedicated and enthusiastic problem solver with a strong foundation in data structures and algorithms. I’ve solved over 600+ DSA problems across platforms like LeetCode, Codeforces, and CodeChef, consistently sharpening my analytical and logical thinking. With a current rating of 1720+ on LeetCode, I enjoy diving into challenging problems and optimizing solutions for performance.</div>
         <div className='opacity-60 mt-4'>These experiences have helped me build a disciplined and structured approach to problem-solving. I'm now looking to apply these skills in real-world software development and contribute meaningfully to impactful engineering projects.</div>
         </div>

         </div>
     

     {/* engifest */}
      
        <div className='flex lg:flex-row flex-col-reverse lg:gap-16 gap-5 lg:mt-20 mt-0 mb-20 lg:mr-16 lg:ml-16  mr-6 ml-6'>
         

         <div className='lg:w-[30%] w-full'>
            <div className='text-3xl'>TEAM LEADING</div>
            <div className='opacity-60 lg:mt-10 mt-6'>I have strong leadership and team management skills, demonstrated through my role as the Co-Head of Team Engifest under the Cultural Council at Delhi Technological University (DTU). I led a team of 6+ students in organizing Engifest, North India’s biggest cultural festival, which attracts thousands of participants.</div>
         <div className='opacity-60 mt-4'> My responsibilities involved planning, coordination, and ensuring timely execution of tasks across various domains. This experience greatly enhanced my ability to lead under pressure, manage time effectively, and collaborate with diverse teams to deliver large-scale events successfully.</div>
         </div>

         <div className='lg:w-[60%] w-full'>
            <img   src={engiImage} className='h-[70%]'/>
         </div>


       </div>


         {/* footer */}


           <div className=" w-screen  opacity-80 mt-16 overflow-hidden">
                        <footer className=" flex text-white  flex-col flex-wrap relative gap-10 text-sm top-[20px]  bg-brownish lg:pl-24 pl-16 pt-16 pb-9  w-full">
                          <div className=" flex flex-row flex-wrap lg:flex-nowrap gap-20 lg:gap-60 lg:w-[400px] w-[80%]">
                  
                             {/* left side footer */}
                            <div className="w-2/3 space-y-6">
                              <p className="text-xl">ABOUT ME</p>
                  
                              <div>
                              <p className=" opacity-80 w-[100%]  lg:w-[250%]">
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




        
         </div>

    )

}

export default Home;


