import React from 'react'
import './Happycard.css'
import CommonHappycard from '../Common/CommonHappycard'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Happycard = () => {
  return (
            <>
             <section>
                  <div className="container">
                        <div className="happy_manu">
                                 <div className="happy_text_row">
                                         <div className="happy_text">
                                               <h2>Trusted by Thousands of Happy Customer</h2>
                                               <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                                         </div>
                                       <div className=' flex justify-center lg:gap-[50px] gap-[5px] flex-wrap-reverse '>
                                        <CommonHappycard happyimg={ <img src="Images/img1.png" alt=" img" />} happytext2={'Viezh Robert'} happytext3={'Warsaw, Poland'}  happytextp={'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'} />

                                         <CommonHappycard happyimg={  <img src="Images/img2.png" alt=" img" />} happytext2={'Yessica Christy'} happytext3={'Shanxi, China'} happytextp={'“I like it because I like to travel far and still can connect with high speed.”.'} />

                                         <CommonHappycard happyimg={ <img src="Images/img3.png" alt=" img" />}  happytext2={'Kim Young Jou'} happytext3={'Seoul, South Korea'} happytextp={'“This is very unusual for my business that currently requires a virtual private network that has high security.”.'} />
                                       </div>
                                 </div>

                                   <div className='angel'>
                                       <div className="angel_row ">
                                              <div className="angel_div flex gap-[15px] ">
                                                  <div className="bitto"></div>
                                                  <div className="bitto"></div>
                                                  <div className="bitto"></div>
                                                  <div className="bitto"></div>
                                                  <div className="bitto"></div>
                                              </div>
                                                <div className="angel_icon">
                                                    <div className="icon1">
                                                        <h2><IoIosArrowRoundBack/></h2>
                                                    </div>
                                                    <div className="icon2">
                                                        <h2><IoIosArrowRoundForward /></h2>
                                                    </div>
                                                </div>
                                       </div>
                                   </div>
                        </div>
                  </div>
             </section>
            
            </>
    

  )
}

export default Happycard