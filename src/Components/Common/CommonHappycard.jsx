import React from 'react'
import { IoIosStarOutline } from "react-icons/io";

const CommonHappycard = ( { happyimg , happytext2 , happytext3 , happytextp}) => {
  return (
       <>

          <div className="happy_card">
                  <div className="happy_card_row  lg:w-[400px] w-[330px] lg:h-[230px] h-[200px] border-[2px] border-[#DDDDDD] hover:border-[#F53838] rounded-[10px] lg:mb-[81px] mb-[10px] ">
                         <div className="happy_card_text flex  justify-around mt-[30px]  ">
                                   <div>
                                       {happyimg}
                                   </div>
                                  <div className='flex  flex-col gap-[5px]  '>
                                     <h2 className=' font-medium font-rubik_font lg:text-[18px] text-[10px] text-[#0B132A] '> {happytext2}</h2>
                                     <h3 className='font-[400px] font-rubik_font lg:text-[14px] text-[10px] text-[#4F5665]' > {happytext3} </h3>
                                  </div>
                                  <div className=' flex gap-[10px] text-center items-center'>
                                      <h4 className='  font-[400px] font-rubik_font lg:text-[16px] text-[10px] text-[#0B132A] '>4.5</h4>
                                      <h5 className='text-[#FEA250]  ' ><IoIosStarOutline /></h5>
                                  </div>
                         </div>
                          <div className=' lg:w-[340px] w-[300px] m-auto mt-[20px] lg:leading-[25px]  font-[400px]  font-rubik_font lg:text-[16px] text-[10px]  text-[#0B132A] '>
                               <p> {happytextp}</p>
                          </div>
                  </div>
          </div>
       
       
       </>
  )
}

export default CommonHappycard