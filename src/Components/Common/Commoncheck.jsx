import React from 'react'


const Commoncheck = ({checkicone , checktext }) => {
  return (
    <>
        <div className="check_row flex gap-[10px]  ">
              <div className="check_icone lg:mb-[15px] mb-[7px] lg:mt-[20px] mt-[10px] bg-[#2FAB73] 
              lg:px-[8px] lg:py-[8px] px-[5px] py-[5px] lg:rounded-[50px] rounded-[50px] text-white 
              lg:text-[20px] text-[10px]  "> {checkicone}
              </div>
              
              <div className="check_text lg:mb-[20px] mb-[10px] lg:mt-[25px] mt-[10px] ">
                  <p className='lg:font-[400px] font-[100px] text-[14px] font-rubik_font text-[#4F5665] '>{checktext}</p>
              </div>
        </div>
    
    </>
  )
}

export default Commoncheck