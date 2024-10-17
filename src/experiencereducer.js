

const ExpData=(state=[],action)=>{
    

    let data=Object.assign([],state);

    if(action.type==="saveexp")
    {
        data=[];
        data.push(action.expinfo);
    }

    return data;

    

}
export default ExpData;