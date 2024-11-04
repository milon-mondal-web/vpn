import React from 'react'
import Commoniconetext from './Commoniconetext'
import { IoMdCheckmark } from "react-icons/io";



const Commonchoose = ({boxtext, discount, month }) => {
  return (
    <>
      <div className="choose_manu_bar">
           <div className="choose_rowbar lg:h-[760px]  lg:w-[330px] h-[210px] w-[110px] border-[2px] border-[#DDDDDD] lg:mb-[150px] mb-[20px] rounded-[10px] hover:border-[#F53838] ">

                <div className="common_head lg:mt-[80px] mt-[5px]   ">
                      <img className='w-[30px] h-[30px] lg:w-[145px] lg:h-[166px] ml-[35px] text-center lg:ml-[93px] ' src="Images/Free.png" alt="box_img" />
                      <h2 className='lg:mt-[30px] mt-[5px] lg:mb-[30px]   text-center lg:text-[18px] text-[10px] font-rubik_font font-[400px] text-[#0B132A] '>{boxtext}</h2>
                </div>
                       <div>
                                 <Commoniconetext   boxicone={<IoMdCheckmark />} iconetext={'Unlimited Bandwitch'} />
                                 <Commoniconetext   boxicone={<IoMdCheckmark />} iconetext={'Encrypted Connection'} />
                                 <Commoniconetext   boxicone={<IoMdCheckmark />} iconetext={'No Traffic Logs'} />
                                 <Commoniconetext   boxicone={<IoMdCheckmark />} iconetext={'Works on All Devices'} />

                      </div>
                      <div className=' lg:mt-[90px] mt-[10px] flex text-center justify-center  mb-[20px]  lg:text-[25px] text-[10px] font-rubik_font font-[400px] text-[#0B132A]   '>
                          <h2>{discount}</h2>
                          <span className='text-[#4F5665]'>{month}</span>
                      </div>
                      <div className=' lg:w-[178px] lg:h-[45px] w-[80px] h-[30px] text-center flex justify-center lg:ml-[76px] ml-[15px] lg:mb-[50px] mb-[10px] items-center border-[2px]
                           border-[#F53838] text-[#F53838] rounded-[50px]  font-bold font-rubik_font lg:text-[16px] text-[10px]  hover:text-[#fff] hover:bg-[#F53838] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] shadow-[#fedfdf] '>
                            <button>Select</button>
                      </div>
           </div>
            
      </div>
    
    </>
  )
}

export default Commonchoose