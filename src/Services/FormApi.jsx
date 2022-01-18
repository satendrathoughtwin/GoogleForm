import axios from "axios";

const saveForm = async (title, description, formName, QuesANS) => {
  const data = {
    title: title || "Untitled form",
    description,
    formName,
    QuesANS,
  };

  console.log("from ques_ans data", QuesANS);
  try {
    const result = await axios.post(`http://localhost:8000/api/form`, data);
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log("Form create Error: ", err.message);
  }
};

const getForm = async () => {
  try {
    const result = await axios.get(`http://localhost:8000/api/form`);
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log("Form find data Error: ", err.message);
  }
};

const getlatestFormForm = async () => {
  try {
    const result = await axios.get(`http://localhost:8000/api/formdece`);
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log("Form find data Error: ", err.message);
  }
};

const getFormById = async (id) => {
  try {
    const result = await axios.get(`http://localhost:8000/api/form/${id}`);
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log(`Error GetById`, err.message);
  }
};

const deleteQuestionById = async (id, arreleid) => {
  try {
    const result = await axios.delete(
      `http://localhost:8000/api/form/${id}/${arreleid}`
    );
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log("Form find data Error: ", err.message);
  }
};

const updateQuestionById = async (id, arreleid) => {
  try {
    const result = await axios.patch(
      `http://localhost:8000/api/form/${id}/${arreleid}`
    );
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log("Form find data Error: ", err.message);
  }
};

const deleteFormId = async (id) => {
  try {
    const result = await axios.delete(`http://localhost:8000/api/form/${id}`);
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log("Form delete data Error: ", err.message);
  }
};

const updateFormById = async (id, title, description, formName, QuesANS) => {
  // req.body.QuesANS[0]

  let Data = {
    QuesANS: QuesANS[0].QuesANS,
  };
  QuesANS.map((res) => (Data = res));

  const data = {
    title,
    description,
    formName,
    QuesANS: Data,
  };

  try {
    const result = await axios.patch(
      `http://localhost:8000/api/form/${id}`,
      data
    );
    if (result) {
      return result.data.data;
    }
  } catch (err) {
    console.log(`Error GetById`, err.message);
  }
};

export {
  saveForm,
  getForm,
  deleteQuestionById,
  getFormById,
  updateFormById,
  getlatestFormForm,
  deleteFormId,
  updateQuestionById
};
