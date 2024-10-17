
const BasicData=(state=[],action)=>{

    let data=Object.assign([],state);

    if(action.type==="savebasic")
        {
            data=[];
            data.push(action.basicinfo);
        }

    return data;

}
export default BasicData;