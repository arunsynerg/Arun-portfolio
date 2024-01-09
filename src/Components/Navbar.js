import React, { useState } from 'react'
import { Link } from "react-scroll"
import contactimg from "../assets/contact.png"
import { FaBars } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

import "./navbar.css"
function Navbar() {
    const [showmenu,setShowmenu] = useState(false);
    return (
        <div className='navcontainer'>
            <nav className='navbar'>
                <div className='logo'>
                <h1>Arun kumar</h1>
                </div>
                <div className='navmenuitems'>
                    <Link activeClassName='active'  to='introcontainer' smooth={true} duration={500} className="navbarmenitemlist">About</Link>
                    <Link activeClassName='active'  to='container' smooth={true} duration={500} className="navbarmenitemlist">Skills</Link>
                    <Link activeClassName='active'  to='educontainer' smooth={true} duration={500} className="navbarmenitemlist">Education</Link>
                    {/* <Link activeClassName='active'  to='Contactcontainer' smooth={true} duration={500} className="navbarmenitemlist">Contact</Link> */}
                </div>
                <Link to='Contactcontainer' smooth={true} duration={500} ><button className='navcontactbtn'><FaRegMessage className='img'/>Contact Me</button></Link>
                <FaBars className='navbaricon' onClick={()=>setShowmenu(!showmenu)}/>
                <div className='navmoblieitems' style={{display : showmenu ? 'flex' : 'none'}}>
                    <Link activeClassName='active'  to='introcontainer' smooth={true} duration={500}  onClick={()=>setShowmenu(false)} className="navbarmenitemlist">About</Link>
                    <Link activeClassName='active'  to='container' smooth={true} duration={500} offset={-40} onClick={()=>setShowmenu(false)} className="navbarmenitemlist">Skills</Link>
                    <Link activeClassName='active'  to='educontainer' smooth={true} duration={500} offset={-40} onClick={()=>setShowmenu(false)} className="navbarmenitemlist">Education</Link>
                    <Link activeClassName='active'  to='Contactcontainer' smooth={true} duration={500} offset={-40} onClick={()=>setShowmenu(false)} className="navbarmenitemlist">Contact</Link>
                </div>
                
            </nav>
        </div>
    )
}
export default Navbar;


