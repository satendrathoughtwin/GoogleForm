import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { MyTextField } from "./TextField";
import { MyAutoComplete } from "./AutoComplete";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Input, TextField } from "@material-ui/core";
import RadioButtonsGroup from "./RadioButton";
import {
  getForm,
  getFormById,
  getlatestFormForm,
  saveForm,
  updateFormById,
} from "../Services/FormApi";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { FormTitle, FormDescription, OpenDialog, FormName, FormQuestion } from "../action";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // marginTop: 80,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  divTop: {
    height: "10px",
    width: "100%",
    backgroundColor: "rgb(103,58,183)",
  },
  divBottom: {
    height: "2px",
    width: "100%",
    backgroundColor: "rgb(103,58,183)",
  },
  divColumn: {
    height: "100%",
    width: "5px",
    backgroundColor: "rgb(103,58,183)",
  },
});

export const TitleCard = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([]);
  const title = useSelector((state) => state.changeTheFromTitle);
  const description = useSelector((state) => state.changeTheFromDesciption);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const result = await getFormById(props.id);
      if (result) {
        setFormData(result);
        console.log("form Data find", result[0].title);
        dispatch(FormName(result[0].formName))
        dispatch(FormTitle(result[0].title ))
        dispatch(FormDescription(result[0].description))
      }
    } catch (err) {
      console.log("find form Data Error", err.message);
    }
  }, [props.id]);
  return (
    <Card className={classes.root} style={{ margin: 50, marginBottom: 10 }}>
      <div className={classes.divTop}></div>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {show ? (
            formData.length > 0 ? (
              formData.map((data,ind) => {
                return (
                  <div key ={ind}>
                    <TextField
                      id="standard-basic"
                      label="Form Title"
                      style={{ width: "100ch" }}
                      // value={title ||data.title }
                      value={title }
                      onChange={(e) => dispatch(FormTitle(e.target.value))}
                    />

                    <TextField
                      id="standard-basic"
                      label="Form Description"
                      style={{ width: "100ch" }}
                      value={description}
                      // value={description||data. description}
                      onChange={(e) =>
                        dispatch(FormDescription(e.target.value))
                      }
                    />
                  </div>
                );
              })
            ) : (
              <>
                <TextField
                  id="standard-basic"
                  label="Form Title"
                  style={{ width: "100ch" }}
                  value={title}
                  onChange={(e) => dispatch(FormTitle(e.target.value))}
                />

                <TextField
                  id="standard-basic"
                  label="Form Description"
                  style={{ width: "100ch" }}
                  value={description}
                  onChange={(e) => dispatch(FormDescription(e.target.value))}
                />
              </>
            )
          ) : formData.length > 0 ? (
            formData.map((data, ind) => {
              return (
                <div onClick={() => setShow(true)} key={ind}>
                  <h1>{data.title || "Untitled Form"}</h1>
                  <p>{data.description}</p>
                </div>
              );
            })
          ) : (
            <div onClick={() => setShow(true)}>
              <h1>Form Title</h1>
              <p>Form Description</p>
            </div>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const FormCard = (props) => {
  const classes = useStyles();
  const [ansType, setAnsType] = useState("");
  const [showCard, setShowCard] = useState(false);
  const unique_id = uuid();
  const options = [
    { title: "Text" },
    { title: "Single Select radio" },
    { title: "Multichoice Checkbox" },
  ];
  const [optionsState, setOptionsState] = useState("");
  const title = useSelector((state) => state.changeTheFromTitle);
  const description = useSelector((state) => state.changeTheFromDesciption);
  const [uniqId, setUniqId] = useState()
  const name = useSelector((state) => state.changeTheFromName);
  const Question = useSelector((state) => state.changeTheFormQuestion);
  const AnswerType = useSelector((state) => state.changeTheFormAnswerType);
  const AnswerList = useSelector((state) => state.changeTheFormAnswerList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("this is answer list", AnswerList);
  useEffect(async()=>{
    const result = await getForm()
    setUniqId (result[0].QuesANS.length)
  
  },[uniqId])
  
  const uniqueId= () => async()=> {
    

  }
console.log("unique id",uniqueId())
  let QuesANS = [
    { id: Math.random() +1/100*56 , Question, AnswerType, AnswerList },
  ];

  const collectFormData = async () => {
    if (!title) {
      swal("wait...", "title is require", "info");
    } else {
      const result = await saveForm(title, description, name, QuesANS);
      dispatch(OpenDialog(false));
      setShowCard(true);
      dispatch(OpenDialog(true));
      console.log("response data ", result);
      if (result) {
        const result = await getlatestFormForm();
        navigate(`/form/${result._id}`, true);
        console.log("in decending order form Data ", result._id);
      }
    }
  };
  useEffect(async()=>{
   
  },[])

  

  const updateFormData = async () => {
    if(QuesANS.length!==0){
    dispatch(OpenDialog(false));
    const result = await updateFormById(props.id,title, description, name, QuesANS);
    setShowCard(true);
    dispatch(OpenDialog(true));
    dispatch(FormQuestion(''))
    QuesANS = []
    console.log("updated form data ", result);
    }
    else{
      swal("Wait ...","Add Query First","info")
    }
    
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 0fr" }}>
      {showCard ? (
        <Card
          className={classes.root}
          style={{ marginLeft: 50, marginRight: 12, marginTop: 5 }}
        >
          <div className={classes.divBottom}></div>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <MyTextField width="60ch" title="Question" />
                </Grid>
                <Grid item xs={4}>
                  <Autocomplete
                    id={options.title}
                    options={options}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 240 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Multiple Choice"
                        variant="outlined"
                      />
                    )}
                    onChange={(event, value) => setAnsType(value.title)}
                  />
                  {/* <MyAutoComplete title="Multiple Choice" Options={options} /> */}
                </Grid>
              </Grid>
            </Typography>
          </CardContent>

          <CardContent>
            <Input
              type="radio"
              value={optionsState}
              onChange={(e) => setOptionsState(e.target.value)}
            />
            {/* it will decide answertype */}
            <RadioButtonsGroup actionType={ansType} />
          </CardContent>
          <hr></hr>
          <CardActions>
            <Grid container spacing={3}>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                <Fab aria-label="add" size="small">
                  <DeleteIcon  onClick={() => setShowCard(false)}/>
                </Fab>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      ) : (
        <Card
          className={classes.root}
          style={{ marginLeft: 50, marginRight: 12, marginTop: 5 }}
          onClick={() => setShowCard(true)}
        >
          <div className={classes.divBottom}></div>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <h1>Add Your Query</h1>
            </Typography>
          </CardContent>
        </Card>
      )}

      <Fab
        aria-label="add"
        size="small"
        onClick={async () => {
          props.id ? await updateFormData() : await collectFormData();
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
