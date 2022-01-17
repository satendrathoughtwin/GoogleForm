import {
  Card,
  Checkbox,
  Fab,
  Grid,
  Input,
  Radio,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { deleteQuestionById, getForm, getFormById } from "../Services/FormApi";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import { MyCheckbox } from "../Components/CheckBox";
import { MyRadio } from "../Components/RadioCircle";

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
export const QuestionPage = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState([]);
  const changeTheDialogStatus = useSelector(
    (state) => state.changeTheDialogStatus
  );
  const [editQues, setEditQues] = useState(false);
  const [changeQuestion, setChangeQuestion] = useState("");

  useEffect(async () => {
    const result = await getFormById(props.id);
    if (result) {
      // console.log("all form data ", result);
      console.log("form data by id", result);
      setFormData(result[0].QuesANS);
      // console.log("all form data ", formData);
    }
  }, []);
  useEffect(async () => {
    const result = await getFormById(props.id);
    if (result) {
      // console.log("all form data ", result);
      console.log("form data by id", result);
      setFormData(result[0].QuesANS);
      // console.log("all form data ", formData);
    }
  }, [changeTheDialogStatus]);
  const deleteQues = async (id, arreleid) => {
    const result = await deleteQuestionById(id, arreleid);
    const result1 = await getForm();
    if (result) {
      // console.log("all form data ", result);
      console.log("all form data ", result1[0].QuesANS);
      setFormData(result1[0].QuesANS);
      // console.log("all form data ", formData);
    }
  };

  const style = {
    width: "80ch",
    margin: 20,
  };

  return (
    <>
      {formData.map((data, ind) => {
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0fr" }}>
            <Card
              className={classes.root}
              style={{
                marginLeft: 50,
                marginRight: 50,
                marginBottom: 20,
                marginTop: 5,
              }}
              key={ind}
            >
              <div className={classes.divBottom}></div>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      {editQues ? (
                        <Input
                          type="text"
                          value={changeQuestion}
                          placeholder="Answer Here"
                          style={style}
                          onChange={(e) => setChangeQuestion(e.target.value)}
                        />
                      ) : (
                        <h3
                          onDoubleClick={() => {
                            setEditQues(true);
                            setChangeQuestion(data.Question);
                          }}
                        >
                          {data.Question}
                        </h3>
                      )}
                      {data.AnswerType === "Text" ? (
                        <Input
                          type="text"
                          placeholder="Enter Here"
                          style={style}
                        />
                      ) : (
                        ""
                      )}

                      {data.AnswerList.map((res, ind) => {
                        return (
                          <>
                            <ul>
                              {data.AnswerType === "Single Select radio" ? (
                                <MyRadio label ={res}/>
                              ) : (
                                <MyCheckbox label={res} />
                              )}
                            </ul>
                          </>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
            <Fab
              aria-label="add"
              size="small"
              onClick={() => deleteQues(props.id, data.id)}
            >
              <DeleteIcon />
            </Fab>
          </div>
        );
      })}
    </>
  );
};
