import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import CommonCounter from '../Common/CommonCounter'
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineServerStack } from "react-icons/hi2";

const Banner = () => {
  return (
    <>
        <section className='bannar_manu'>
               <div className="container">
                     <div className="banner_row">
                          
                            <div className="banner_text">
                                   <h2>Want anything to be easy with <span className='text-[#0B132A] lg:font-bold  '> LaslesVPN.</span></h2>
                                   <p>Provide a network for all your needs with ease and fun using <span className='lg:font-medium 
                                   text-[#4F5665]'> LaslesVPN </span>discover interesting features from us.</p>
                                   <h3><Link to={'#'}>Get Started</Link> </h3>
                            </div>
                            <div className="banner_img">
                                <img src="Images/l1.png" alt="bannar_img" />
                            </div>
                     </div>
                       <div className="counter_manu_bar flex  ">

                            <CommonCounter  counternumber={90}  countPlus={'+'} commonicone={<FaRegUserCircle />} commontext={'Users'} />
                            
                            <div  className=' border-[1px] lg:gap-[129px] gap-[40px] lg:ml-[129px] ml-[30px]  
                                  lg:mt-[37px] mt-[10px] border-[#EEEFF2] rounded-[2px] lg:h-[126px] h-[30px]  '>
                                <span></span>
                            </div>
                            <CommonCounter  counternumber={30}  countPlus={'+'} commonicone={<IoLocationSharp />} commontext={'Locations'} />

                            <div  className=' border-[1px] lg:gap-[134px] gap-[40px] lg:ml-[129px] ml-[35px]  
                                  lg:mt-[37px] mt-[10px] border-[#EEEFF2] rounded-[2px] h-[30px] lg:h-[126px]  '>
                                <span></span>
                            </div>
                            <CommonCounter  counternumber={50}  countPlus={'+'} commonicone={<HiOutlineServerStack />} commontext={'Servers'} />
                            
                       </div>
               </div>
        </section>
    
    </>
  )
}

export default Banner