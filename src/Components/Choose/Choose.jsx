import React from 'react'
import './Choose.css'
import Commonchoose from '../Common/Commonchoose'

const Choose = () => {
  return (
    <>
     <section>
          <div className="container">
                <div className="choose_manu">
                       <div className="choose_row ">
                            <div className="choose_text">
                                   <h2>Choose Your Plan</h2>
                                   <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                            </div>
                            <div className='flex justify-center lg:gap-[50px] gap-[10px] '>
                                 <Commonchoose boxtext={'Free Plan'}     discount={'Free'} />
                                 <Commonchoose boxtext={'Standard Plan'} discount={'$9 '}        month={'/ mo'}/>
                                 <Commonchoose boxtext={'Premium Plan'}  discount={'$12 '}       month={'/ mo'} />
                            </div>

                       </div>
                </div>
          </div>
     </section>
    
    </>
  )
}

export default Choose