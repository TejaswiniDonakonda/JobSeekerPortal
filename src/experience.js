import { useState } from "react";
import { useDispatch } from "react-redux";
const Experience=()=>{

    let[pagedata,processPageData]=useState({});

    const pickValue=(obj)=>{
        pagedata[obj.target.name]=obj.target.value;
        processPageData(pagedata);

    }

    const dispatch=useDispatch();
    const save=(obj)=>{
        obj.preventDefault();


        let dispatchData={type:"saveexp",expinfo:pagedata};
        
        dispatch(dispatchData);
        obj.target.reset();
        alert("Experience Details Saved Successfully..!!");
        

        
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                <h3 className="text-center mb-4"> Your Experience Details</h3>
                
                <form onSubmit={save}>
                    <div className="mb-4">
                        <label>Your Total Experience</label>
                        <input type="text" className="form-control" placeholder="in years" name="totalexp" onChange={pickValue}/>
                    
                    </div>
                    <div className="mb-4">
                        <label>Over All Out Your Work Experience : <br/></label>
                        <textarea className="form-control" name="aboutexp" onChange={pickValue}></textarea>    
                    </div>
                    <button className="btn btn-primary m-3">Save & Next</button>
                </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )

}
export default Experience;