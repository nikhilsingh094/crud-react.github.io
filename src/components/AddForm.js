import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddForm = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");

    const header = {"Access-Control-Allow-Origin": "*"};
    const handleSubmit = (e)=>{
        e.preventDefault();
         axios.post(
            'https://649bbfe0048075719236de55.mockapi.io/crud-new', {
            user:user,
            email:email,
            header
            
        })
       navigate('/show');
    }

  return (
    <div className='container mt-5'>
    <div className='d-flex justify-content-between'>
    <h2>Add Contact</h2>
    <Link to='/show'><button className='btn btn-primary'>Show Data</button></Link>
    </div>
    <form>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">
     Name
    </label>
    <input
      type="name"
      className="form-control"
      id="name"
      aria-describedby="emailHelp"
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
        aria-describedby="emailHelp"
        onChange={(e)=> setEmail(e.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
      Submit
    </button>
  </form>
  </div>
  )
}

export default AddForm
