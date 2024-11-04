import React from 'react'
import './Foooter.css'
import { Link } from 'react-router-dom'
import { RiFacebookFill } from "react-icons/ri";

import { CiInstagram } from "react-icons/ci";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className='bg-[#F8F8F8] '>
        <div className="container">
                   <div className="footer_box">
                        <div className="box_row">
                                <div className="box_text">
                                       <h2>Subscribe Now for Get Special Features!</h2>
                                       <p>Let's subscribe with us and find the fun.</p>
                                </div>
                                <div className="box_botton">
                                       <button> <Link to={'#'}>Get Started</Link></button>
                                      
                                </div>
                        </div>
                   </div>

                     <div className="footer_text_row ">
                            <div className="footer_text_head_1">

                                 <div className="footer_img_head">
                                       <img src="Images/Logo.png" alt="logo" />
                                       <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                                       <div className="icone  ">
                                         <div className="icone_img1  ">
                                         <RiFacebookFill />
                                         </div>
                                         <div className="icone_img2  ">
                                         <TiSocialTwitter />
                                         </div>
                                         <div className="icone_img3  ">
                                         <CiInstagram /> 
                                         </div>
                                       </div>
                                       <h6>©2020LaslesVPN</h6>
                                 </div>
                            </div>

                            <div className="footer_text_head_2">

                                 <div className="footer_text_2  ">
                                     <div className="product_text    ">
                                        <h2>Product</h2>
                                        <Link to={'#'} >Download</Link>
                                        <Link to={'#'} >Pricing</Link>
                                        <Link to={'#'} >Locations</Link>
                                        <Link to={'#'} >Server</Link>
                                        <Link to={'#'} >Countries</Link>
                                        <Link to={'#'} >Blog</Link>
                                     </div>
                                     <div className="product_text   ">
                                        <h2>Engage</h2>
                                        <Link to={'#'} >LaslesVPN ? </Link>
                                        <Link to={'#'} >FAQ</Link>
                                        <Link to={'#'} >Tutorials</Link>
                                        <Link to={'#'} >About Us</Link>
                                        <Link to={'#'} >Privacy Policy</Link>
                                        <Link to={'#'} >Terms of Service</Link>
                                     </div>
                                     <div className="product_text    ">
                                         <h2>Earn Money</h2>
                                        <Link to={'#'} >Affiliate</Link>
                                        <Link to={'#'} >Become Partner</Link>
                                     </div>
                                 </div>
                                
                            </div>







                     </div>
        </div>


      </footer>
    
    </>
  )
}

export default Footer