

const SkillData=(state=[],action)=>{
    
    let data=Object.assign([],state)

    if(action.type==="saveskill")
        {
            data.push(action.skillinfo);
        }

    return data;

}
export default SkillData;