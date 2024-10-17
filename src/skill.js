import { useState } from "react";
import { useDispatch } from "react-redux";

const Skills=()=>{
    let[pagedata,processPageData]=useState({});

    const pickValue=(obj)=>{
        pagedata[obj.target.name]=obj.target.value;
        processPageData(pagedata);

    }

    const dispatch=useDispatch();
    const save=(obj)=>{
        obj.preventDefault();

        let dispatchData={type:"saveskill",skillinfo:pagedata};
        dispatch(dispatchData);
        obj.target.reset();
        alert("Skills added Successfully..!!");
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                <h1 className="text-center mb-4">Skills Information</h1>
                <p>Enter Your Skills</p>
                <form onSubmit={save}>
                    <textarea className="form-control" name="skill" onChange={pickValue}></textarea>
                    <button className="btn btn-primary m-3">Save & Next</button>
                </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )

}
export default Skills;

//<h1 className="text-center text-danger">Skills Information</h1>