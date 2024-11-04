import React from 'react'
import './Provide.css'
import Commoncheck from '../Common/Commoncheck'
import { FaCheck } from "react-icons/fa6";

const Provide = () => {
  return (
   <>
      <section className='provider_manu '>
           <div className="container">
                 <div className="provide_row  ">
                       <div className="provide_img ">
                         <img src="Images/l2.png" alt="provide_imge" />
                       </div>
                        <div className="provide_text_head">
                                <div className="provide_text_row  ">
                                       <h2>We Provide Many Features You Can Use</h2>
                                       <p>You can explore the features that we provide with fun and have their own     functions each feature.
                                       </p>
                                       <div>

                                       <Commoncheck checkicone={<FaCheck />} checktext={'Powerfull online protection.'} />
                                       <Commoncheck checkicone={<FaCheck />} checktext={'Internet without borders.'} />
                                       <Commoncheck checkicone={<FaCheck />} checktext={'Supercharged VPN'} />
                                       <Commoncheck checkicone={<FaCheck />} checktext={'No specific time limits.'} /> 
                                       </div>
                                      
                                </div>
                        </div>
                 </div>
           </div>
      </section>
   
   </>
  )
}

export default Provide