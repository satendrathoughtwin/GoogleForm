export const OpenDialog = (data) => {
  return { type: "OPEN", payload: data };
};
export const CloseDialog = (data) => {
  return { type: "CLOSE", payload: data };
};

export const FormTitle = (title) => {
  return { type: "setTitle", payload: title };
};

export const FormDescription = (description) => {
  return { type: "setDescription", payload: description };
};

export const FormName = (name) => {
  return { type: "setName", payload: name };
};

export const FormQuestion = (name) => {
  return { type: "setQuestion", payload: name };
};

export const FormQuestionArray = (questionArray) => {
  return { type: "setQuestionArray", payload: questionArray };
};

export const FormAnswerType = (answerType) => {
  return { type: "setAnswerType", payload: answerType };
};

export const FormAnswerList = (answerList) => {
  return { type: "setAnswerList", payload: answerList };
};
