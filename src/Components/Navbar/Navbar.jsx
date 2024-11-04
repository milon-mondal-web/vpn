import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
<>
      <nav className='navber'>
            <div className="container">
                   <div className="manu_row">
                         <div className="manu_img mt-[50px]">
                           <img src="Images/Logo.png" alt="logo img" />
                         </div>
                         <div className="manu_item ">
                             <ul>
                                <li><Link to={''} >About</Link></li>
                                <li><Link to={''} >Features</Link></li>
                                <li><Link to={''} >Pricing</Link></li>
                                <li><Link to={''} >Testimonials</Link></li>
                                <li><Link to={''} >Help</Link></li>
                             </ul>
                         </div>
                         <div className="manu_login">
                             <ul>
                             <li><Link to={''} >Sign In</Link></li>
                             <li><Link to={''} >Sign Up</Link></li>
                             </ul>
                         </div>
                   </div>
            </div>
      </nav>



</>
  )
}

export default Navbar