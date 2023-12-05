import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="navbar">
    <a href="#home">Home</a>
    <a onClick={()=>navigate('/createBlog')} >CreateBlog</a>
</div>
  
</>
  )
}

export default Navbar