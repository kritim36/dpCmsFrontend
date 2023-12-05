import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {
  const{id} = useParams()
  const[blog,setBlog] = useState({})
  const navigate = useNavigate()

  //deleteBlog
  const deleteBlog = async()=>{
   const response = await axios.delete('http://localhost:3000/blogs/' + id)
   if(response.status == 200){
     navigate('/')
   }
  }

  //fetch single blog
  const fetchSingleBlog = async()=>{
    const response = await axios.get('http://localhost:3000/blogs/' + id)
    if(response.status == 200){
      setBlog(response.data.blogs)
    }
    console.log(response)
  }

  useEffect(()=>{
    fetchSingleBlog()
  },[])

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.subTitle}</h3>
      <p>{blog.description}</p>
      <button onClick={deleteBlog} >Delete</button>
     <Link to={`/update/${blog._id}`} > Update</Link> 
    </div>
    
  )
}

export default SingleBlog