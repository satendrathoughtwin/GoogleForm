import changeTheDialogStatus from "./operations";
import {
  // changeTheFromData,
  changeTheFromDesciption,
  changeTheFromName,
  changeTheFromTitle,
  changeTheFormQuestion,
  changeTheFormAnswerType,
  changeTheFormAnswerList,
  changeTheFormQuestionUpdate
} from "./operations";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheDialogStatus,
  // changeTheFromData,
  changeTheFromDesciption,
  changeTheFromName,
  changeTheFromTitle,
  changeTheFormQuestion,
  changeTheFormAnswerType,
  changeTheFormAnswerList,
  changeTheFormQuestionUpdate
});

export default rootReducer;
