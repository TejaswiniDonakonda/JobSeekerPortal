import { useState } from "react";
import { useDispatch } from "react-redux";

const Education=()=>{

    let[edudata,processEduData]=useState({});

    const pickValue=(obj)=>{
        edudata[obj.target.name]=obj.target.value;
        processEduData(edudata);

    }

    const dispatch=useDispatch();
    const save=(obj)=>{
        obj.preventDefault();


        let dispatchData={type:"saveedu",eduinfo:edudata};
        dispatch(dispatchData);
        obj.target.reset();
        alert("Education Details Saved Successfully..!!");
        

        
    }

    return(
        <div className="container border-rounded mt-5 ">
            
            <div className="card text-center mb-2">
                <div className="card-header bg-primary text-white mb-2"><h4>Enter Your Education Details</h4></div>
                <div className="col-lg-6"></div>
             <form onSubmit={save}>  
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control " placeholder="Enter your higest Education" name="eduname" onChange={pickValue}/>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <input type="date" className="form-control" placeholder="Passing Year" name="passingyear" onChange={pickValue} />
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                    <input type="number" className="form-control" placeholder="Grade or %" name="grade" onChange={pickValue}/>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder=" College/University" name="college" onChange={pickValue}/>
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
export default Education;