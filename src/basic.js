import { useState } from "react";
import {useDispatch}from "react-redux";

const Basic=()=>{

    let[pagedata,processEduData]=useState({});

    const pickValue=(obj)=>{
        pagedata[obj.target.name]=obj.target.value;
        processEduData(pagedata);

    }

    const dispatch=useDispatch();
    const save=(obj)=>{
        obj.preventDefault();

       let dispatchData={type:"savebasic",basicinfo:pagedata};
       dispatch(dispatchData);
       obj.target.reset();
       alert("Basic Details Saved Sucessfully..!!")
    }

    return(
        <div className="container border-rounded mt-5 ">
            
            <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white mb-2"><h4>Enter Your Basic Details</h4></div>
                <div className="col-lg-6"></div>
             <form onSubmit={save}>  
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Full Name" name="fullname" onChange={pickValue} />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <input type="date" className="form-control" placeholder="DOB" name="dob" onChange={pickValue} />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                    <select type="number" className="form-control" placeholder="Gender" name="gender" onChange={pickValue}>
                        <option value="">Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                    <textarea type="text" className="form-control" placeholder=" Address" name="address" onChange={pickValue}></textarea>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 text-center">
                        <button className="btn btn-success border-rounded text-white">Save &Next</button>
                        
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </form> 
            </div>
            <div className="col-lg-4"></div>

        </div>
    )

}
export default Basic;