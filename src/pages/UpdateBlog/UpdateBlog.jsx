import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UpdateBlog.css'
import Navbar from '../../components/Navbar/Navbar'

const UpdateBlog = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const[blog,setBlog] =useState({})

  const handleChange = (e)=>{
    const{name,value} = e.target 
    setBlog({
      ...blog,
      [name] : value
    })
  }

   // delete key of the object 
   const keyToExclude = ['createdAt','updatedAt']
   keyToExclude.forEach((key)=>{
       delete blog[key]
   })
 

  const updateBlog = async (e)=>{
    e.preventDefault()
    const response = await axios.patch('http://localhost:3000/blogs/' + id, blog)
    if(response.status == 200){
      navigate('/singleBlog/' + id)
    }
    console.log(response)
  }

  const fetchSingleBlog = async()=>{
    const response = await axios.get('http://localhost:3000/blogs/' + id)
    if(response.status == 200){
      setBlog(response.data.blogs)
    }
    
  }

  useEffect(()=>{
    fetchSingleBlog()
  },[])
  
  
  return (
    <>
    <Navbar />
     <div className="form-container">
    <h2>Update Blog</h2>
    <form onSubmit={updateBlog}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" value = {blog.title} onChange={handleChange} id="title" name="title" placeholder="Enter Title"  />
        </div>
        <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" value={blog.subTitle} onChange={handleChange} id="subtitle" name="subTitle" placeholder="Enter Subtitle"/>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={blog.description} onChange={handleChange} name="description" rows="4" placeholder="Enter Description" ></textarea>
        </div>
        <button className="btn" type="submit">Submit</button>
    </form>
</div>
    </>
  )
}

export default UpdateBlog