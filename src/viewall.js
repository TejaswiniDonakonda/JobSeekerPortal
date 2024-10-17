import { useState } from "react";
import { useSelector } from "react-redux";



const ViewAll=()=>{
    let BasicData=useSelector(state=>state.BasicData);
    let EduData=useSelector(state=>state.EduData);
    let SkillData=useSelector(state=>state.SkillData);
    let ExpData=useSelector(state=>state.ExpData);

    const[basicd,setBasicd]=useState(BasicData);
    const[edud,setEdud]=useState(EduData);
    const[myskill,setMyskill]=useState(SkillData);
    const[myexp,setExp]=useState(ExpData);

    

    
    
    
    const save=()=>{
        if(BasicData.length==0 || EduData.length==0 || SkillData.length==0 || ExpData.length==0){
            alert("invalid Request Please Check Properly...")
        }else{

            
            let allinfo={"basic":BasicData[0],"edu":EduData[0],"skill":SkillData[0],"exp":ExpData[0]}
            
            let url="http://localhost:1111/user";
            let postData={
                headers:{'Content-Type':'application/json'},
                method:'post',
                body:JSON.stringify(allinfo)
            }
            
            fetch(url,postData)
            .then(response=>response.json())
            .then(info=>{
                alert("Record Saved Successfully");
                window.location.reload(); //to clear the fields
            })
        }
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center ">My Profile Preview</h2>
                </div>

                {basicd.length>0 ?(
                    <div className="col-lg-3 mt-2 ">
                        <h4>My Basic Details</h4>
                        <p>Full Name:{BasicData[0].fullname}</p>
                        <p>Date Of Birth:{BasicData[0].dob}</p>
                        <p>Gender:{BasicData[0].gender}</p>
                        <p>Address:{BasicData[0].address}</p>
                    </div>):null
                }
                {edud.length>0 ?
                    (<div className="col-lg-3">
                    <h4>Education Details</h4>
                    <p>Education:{EduData[0].eduname}</p>
                    <p>Passing Year:{EduData[0].passingyear}</p>
                    <p>Grade:{EduData[0].grade}</p>
                    <p>college:{EduData[0].college}</p>
                </div>):null
                }

                {myskill.length>0?(
                    <div className="col-lg-3">
                        <h4>My Skills Details</h4>
                        <p>Skills:{SkillData[0].skill}</p>
                    </div>):null
                }

                {myexp.length>0?(
                    <div className="col-lg-3">
                        <h4>My Experience Details</h4>
                        <p>Total Experience:{ExpData[0].totalexp}</p>
                        <p>Over All Out Your Work Experience{ExpData[0].aboutexp}</p>
                    </div>):null
                }

                
                
            </div>
            <div className="row text-center mt-5">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 mt-5">
                <button className="btn btn-success btn-lg" onClick={save} >Save</button>
                </div>
                <div className="col-lg-4"></div>
            
            </div>
        </div>
    )

}
export default ViewAll;