import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const[blogs,setBlogs] = useState([])

  const fetchBlogs = async()=>{
    try {
      const response = await axios.get('http://localhost:3000/blogs')
      if(response.status == 200){
        setBlogs(response.data.blogs)
      }else{
        //code here
      }
    
    } catch (error) {
      alert("something went wrong")
    }
    
  }

  useEffect(()=>{
    fetchBlogs()
  },[])
  

  return (
    <>
   <Navbar />
   <div className="card" style={{width: '18rem'}}>
  
  {blogs.map((blog)=>{
    return(
      <div key = {blog._id} className="card-body">
    <h5 className="card-title">{blog.title}</h5>
    <h5 className="card-title">{blog.subTitle}</h5>
    <p className="card-text">{blog.description}</p>
    <Link to={`/singleBlog/${blog._id}`}>See More</Link>
  </div>
    )
  })}
</div>
   </>
  )
}

export default Home