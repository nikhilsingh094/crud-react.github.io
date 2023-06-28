import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ShowData = () => {

    const [users,setUsers]  = useState([]);
    const [tabledark,setTabledark]  = useState('');

    useEffect(()=>{
        showData()
    },[])
    const showData = async() =>{
      const res = await axios.get('https://649bbfe0048075719236de55.mockapi.io/crud-new');
      setUsers(res.data);
    }

  const deleteData = async(id) =>{
    await axios.delete(`https://649bbfe0048075719236de55.mockapi.io/crud-new/${id}`);
    await showData();
  }

  const setDataToLocal = (id,user,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("user",user);
        localStorage.setItem("email",email);
  }

  return (
    <>
    <div className='container table-responsive mt-5'>
    <div className='d-flex justify-content-between'>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch"
             onClick={()=>{
                if(tabledark === "table-dark"){
                    setTabledark('');
                } else{
                    setTabledark('table-dark');
                } 
            }} />
        </div>
        <Link to='/'><button className='btn btn-primary'>Create</button></Link>
    </div>
    <table className={`table ${tabledark}`}>
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope='col'>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      users.map((elem)=>{
        return(
            <tr>
            <td>{elem.id}</td>
            <td>{elem.user}</td>
            <td>{elem.email}</td>
            <td>
            <Link to='/edit'>
                <button className='btn btn-warning' onClick={()=>setDataToLocal(elem.id,elem.user,elem.email)}>Edit</button>
            </Link>    
                <button className='btn btn-danger ms-2' onClick={()=>deleteData(elem.id)}>Delete</button>
            </td>
            </tr>
        )
      })
    }
    </tbody>
  </table>
  </div>
    </>
  )
}

export default ShowData
