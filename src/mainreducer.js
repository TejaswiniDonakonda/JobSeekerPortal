import { combineReducers } from "redux";
import BasicData from "./basicreducer";
import EduData from "./educationreducer";
import SkillData from "./skillreducer";
import ExpData from "./experiencereducer";

const MainReducer=combineReducers({BasicData,EduData,SkillData,ExpData});

export default MainReducer;