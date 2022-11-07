import React,{useState} from 'react'
import { FaBars } from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {
  const [menu, setmenu] = useState(false)
  return (
    <>
    <nav className='navbar'>
      
        <div>
        <h1 style={{fontSize:"3rem"}}>DESIGN</h1>
<h2 style={{marginTop:"-3rem"}}>AGENCY</h2>
        </div>
        
        <ul className='menu'>
            <li className='menu_list'>Speacialize in</li>
            <li className='menu_list'>Case Study</li>
            <li className='menu_list'>Process</li>
            <li className='menu_list'>industries</li>
        </ul>
      
        <div style={{display:"flex"}}>
            <button className='schedule_call'>Schedule A Call</button>
            <button className='hiring'>We are Hiring</button>
        </div>
        <div>
<FaBars size={50} className="sidemenu" onClick={()=>{
  setmenu(!menu)
}}/>
        </div>
      
    </nav>
    {menu&& <nav>
    <ul className='side_menu'>
            <li className='side_menu_list'>Speacialize in</li>
            <li className='side_menu_list'>Case Study</li>
            <li className='side_menu_list'>Process</li>
            <li className='side_menu_list'>industries</li>
            <li className='side_menu_list'><button className='sidemenu_schedule_call'>Schedule A Call</button></li>
            <li className='side_menu_list'><button className='sidemenu_hiring'>We are Hiring</button></li>
        </ul>
    </nav>}
   
    </>
  )
}

export default Navbar
