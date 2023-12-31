import React, { useState } from 'react'
import './CreateBlog.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  const[data,setData] = useState({
    title : "",
    subTitle : "",
    description : ""
  })
  
  const handleChange = (e)=>{
    const{name,value} = e.target
    setData({
      ...data,
      [name] : value
    })
  }

  const createBlog = async(e)=>{
    e.preventDefault()
   
    const response = await axios.post('http://localhost:3000/blogs',data)
    if(response.status == 201){
      navigate("/")
    }else{
      alert("something went wrong")
    }
  }


  return (
    <>
    <Navbar />
     <div className="form-container">
    <h2>Form Title</h2>
    <form onSubmit={createBlog}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Enter Title" onChange={handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" name="subTitle" placeholder="Enter Subtitle" onChange={handleChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter Description" onChange={handleChange}></textarea>
        </div>
        <button className="btn" type="submit">Submit</button>
    </form>
</div>
    </>
  )
}

export default CreateBlog