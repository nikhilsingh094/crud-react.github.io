
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Edit = () => {

    const navigate = useNavigate();

    const [id,setId] = useState("");
    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setUser(localStorage.getItem('user'))
        setEmail(localStorage.getItem("email"))
    },[])


    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://649bbfe0048075719236de55.mockapi.io/crud-new/${id}`,{
            user:user,
            email:email,
        })

        navigate('/show')
    }

  return (
    <div className='container mt-5'>
    <h2>Edit Contact</h2>
    <form>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">
     Name
    </label>
    <input
      type="name"
      className="form-control"
      id="name"
     value={user}
      onChange={(e)=> setUser(e.target.value)}
    />
  </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
      Update
    </button>
    <Link to='/'><button className='btn btn-primary ms-2'>Back</button></Link>
  </form>
  </div>
  )
}

export default Edit
