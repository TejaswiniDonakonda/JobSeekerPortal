import { useState,useEffect } from "react";


const AdminLogin=()=>{

    let[adminData,processData]=useState({});
    let[msg,updateMsg]=useState("Enter Login Details..!");

 const pickValue=(e)=>{
    adminData[e.target.name]=e.target.value;
    processData(adminData);

 }
    const gologin=(obj)=>{
        obj.preventDefault();
        updateMsg("Please Wait...");
        let url="http://localhost:1111/login";
        let postData={
            headers:{'Content-Type':'application/json'},
            method:"post",
            body:JSON.stringify(adminData)
        }
        fetch(url,postData)
        .then(response=>response.json())
        .then(empinfo=>{
            if(empinfo.length>0){
                updateMsg("Success ! Redirecting...");
                localStorage.setItem("adminid",empinfo[0]._id);
                localStorage.setItem("adminname",empinfo[0].fullname);
                window.location.reload();
            }else{
                updateMsg("Fail ! Invalid or not exist");
            }
        })

    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="border p-5 rounded">
                        <p className="text-center text-danger">{msg}</p>
                        <h3 className="text-center mb-4 text-primary">Admin Login</h3>
                        <form onSubmit={gologin}>
                            <div className="mb-4">
                                <p>Email Id</p>
                                <input type="text" className="form-control" name="emailid" onChange={pickValue}/>
                            </div>
                            <div className="mb-4">
                                <p>Password</p>
                                <input type="password" className="form-control" name="password" onChange={pickValue}/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )

}
export default AdminLogin;