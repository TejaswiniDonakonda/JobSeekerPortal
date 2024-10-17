import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';

const Allcustomer = () => {
   
    let [customer,processCustomer]=useState([]);
    const getCustomer=()=>{
        fetch("http://localhost:1111/user")
        .then(response=>response.json())
        .then(customerArray=>{
            processCustomer(customerArray)
        })
    }
    useEffect(()=>{
        getCustomer()
    },[]);


  return (
    <div className='container mt-4'>
        <div className='row mb-5'>
            <div className='col-lg-6'>
                <h3 className='text-center text-primary mb-4 col-lg-12'>
                    Total Customer :{customer.length}
                </h3>
            </div>
            <div className='col-lg-6'>
                <h3>Welcome : {localStorage.getItem("adminname")}-
                    <button className='m-2 btn btn-danger btn-sm' onClick={logout}>Logout</button>
                </h3>
            </div>    
        </div>
        {
            customer.map((user,index)=>{
                return(
                    <div className='row mb-5 shadow p-4 rounded' key={index}>
                        <div className='col-xl-3'>
                            <h4>Basic Details</h4>
                            <p>Full Name:{user.basic.fullname}</p>
                            <p>Date Of Birth:{user.basic.dob}</p>
                            <p>Gender:{user.basic.gender}</p>
                            <p>Address:{user.basic.address}</p>
                        </div>
                        <div className='col-xl-3'>
                            <h4>Education Details</h4>
                            <p>Education Name:{user.edu.eduname}</p>
                            <p>Passing Year:{user.edu.passingyear}</p>
                            <p>Grade:{user.edu.grade}</p>
                            <p>College:{user.edu.college}</p>
                        </div>
                        <div className='col-xl-3'>
                            <h4> About Skills </h4>
                            <p>Skills:{user.skill.skill}</p>
                        </div>
                        <div className='col-xl-3'>
                            <h4> About Experience </h4>
                            <p>Total Exp:{user.exp.totalexp}</p>
                            <p>About Exp:{user.exp.aboutexp}</p>
                        </div>
                        
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Allcustomer;

const logout=()=>{
    localStorage.clear();
    window.location.reload();
}