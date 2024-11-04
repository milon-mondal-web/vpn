import React from 'react'

import CountUp from 'react-countup';

const CommonCounter = ( { counternumber , countPlus ,commonicone, commontext}) => {
  return (
      <>

        
               <div className="conuter_row flex   ">

                       <div className=' flex lg:gap-[36px] gap-[5px] lg:pt-[68px] pt-[10px] lg:pl-[90px] pl-[10px] '>

                       <div className="icone flex  items-center lg:w-[55px] lg:h-[55px] w-[25px] h-[25px]  border-[1px]
                             rounded-[50%] border-none justify-center bg-[#FFECEC] text-[#F53838] ">{commonicone}</div>

                       <div className='counter_bar flex flex-col '>
                            <div className='flex'>
                                <CountUp className='text-[#0B132A] lg:text-[25px] text-[15px] font-rubik_font font-bold '  end={counternumber} />
                                 <div className='text-[#0B132A] lg:text-[25px] text-[15px] font-rubik_font font-bold '>{countPlus}</div>
                            </div>

                             <p className='text-[#4F5665]  lg:text-[20px] text-[10px] font-rubik_font lg:font-[400px] font-[100px]'>{commontext}</p>
                       </div>

                     </div>


               </div>
         
      
      </>
  )
}

export default CommonCounter