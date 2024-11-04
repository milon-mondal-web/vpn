import React from 'react'

const Commoniconetext = ({boxicone , iconetext  }) => {
  return (
   <>

                <div className="check_row flex lg:gap-[10px] gap-[5px] lg:ml-[70px]  ml-[10px]  ">
                              <div className="check_icone lg:mb-[10px]  lg:mt-[5px] text-[#2FAB73] 
                                              lg:px-[8px] lg:py-[8px] px-[5px] py-[5px] lg:rounded-[50px] rounded-[50px] 
                                               lg:text-[20px] text-[5px]"> {boxicone}
                              </div>
              
                              <div className="check_text lg:mb-[10px] mt-[3px]  lg:mt-[10px]  ">
                                  <p className='lg:font-[400px]  font-[100px] lg:text-[14px] text-[5px] font-rubik_font text-[#4F5665] '>{iconetext}</p>
                                   
                              </div>

               </div>
   
   
   </>
  )
}

export default Commoniconetext