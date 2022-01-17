const initialState = true;

const changeTheDialogStatus = (state = initialState, action) => {
  // alert(action.payload)
  switch (action.type) {
    case "OPEN":
      return action.payload;
    case "CLOSE":
      return action.payload;
    default:
      return state;
  }
};
const formDataInitialState = "";
// const changeTheFromData = (state = formDataInitialState, action) => {
//   switch (action.type) {
//     case "setTitle":
//       return action.payload;
//       break;
//     case "setDescription":
//       return action.payload;
//       break;
//     case "setName":
//       return action.payload;
//       break;
//     case "setQuestionArray":
//       return action.payload;
//       break;

//     default:
//       return state;
//   }
// };
const changeTheFromTitle = (state = formDataInitialState, action) => {
  switch (action.type) {
    case "setTitle":
      return action.payload;
      break;

    default:
      return state;
  }
};

const changeTheFromDesciption = (state = "", action) => {
  switch (action.type) {
    case "setDescription":
      return action.payload;
      break;
    default:
      return state;
  }
};
const formNameInitialState = "UnNamed form";
const changeTheFromName = (state = formNameInitialState, action) => {
  switch (action.type) {
    case "setName":
      return action.payload;
      break;
    default:
      return state;
  }
};
const changeTheFormQuestion = (state = "", action) => {
  switch (action.type) {
    case "setQuestion":
      return action.payload;
      break;
    default:
      return state;
  }
};

const changeTheFormAnswerType = (state = "Text", action) => {
  switch (action.type) {
    case "setAnswerType":
      return action.payload;
      break;
    default:
      return state;
  }
};

const changeTheFormAnswerList = (state = [], action) => {
  switch (action.type) {
    case "setAnswerList":
      return action.payload;
      break;
    default:
      return state;
  }
};

export default changeTheDialogStatus;
export {
//   changeTheFromData,
  changeTheFromDesciption,
  changeTheFromName,
  changeTheFromTitle,
  changeTheFormQuestion,
  changeTheFormAnswerType,
  changeTheFormAnswerList
};

