
const EduData=(state=[],action)=>{

    let data=Object.assign([],state);

    if(action.type==="saveedu")
    {
        data=[];
        data.push(action.eduinfo);
    }

    return data;

}
export default EduData;