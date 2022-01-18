import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import { Button, Checkbox, Input } from "@material-ui/core";
import { uid } from "react-uid";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";
import { FormAnswerList, FormAnswerType } from "../action";
import { Link } from "react-router-dom";
export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const style = {
    width: "70ch",
    margin: 20,
  };
  const style1 = {
    width: "10ch",
    margin: 20,
  };
  const ButtonStyle = {
    color: "blue",
  };
  const [answer, setAnswer] = useState();
  const [addAns, setAddAns] = useState([]);
  const dispatch = useDispatch();

  const AnswerType = useSelector((state) => state.changeTheFormAnswerType);
  const isAnswerUpdate = useSelector(
    (state) => state.changeTheFormQuestionUpdate
  );
  const addItem = (e) => {
    if (e.key === "Enter") {
      if (!answer) {
      } else {
        setAddAns([...addAns, answer]);
        dispatch(FormAnswerList(addAns));
        setAnswer("");
      }
    }
  };
  const addOption = (e) => {
    setAddAns([...addAns, answer]);
    dispatch(FormAnswerList(addAns));
    setAnswer(`Option ${addAns.length + 2}`);
  };

  useEffect(() => {
    dispatch(FormAnswerType(props.actionType));
  }, [props.actionType]);

  useEffect(() => {
    if (isAnswerUpdate) setAddAns([]);
  }, [isAnswerUpdate]);

  const removeElementById = async (id) => {
    const filteredData = await addAns.filter((data, ind) => {
      return ind !== id;
    });
    setAddAns(filteredData);
    dispatch(FormAnswerList(filteredData));
  };

  const updateElementById = async (id) =>{
    const foundData = await addAns.find((data,ind)=>ind === id)

  }

  return (
    <div>
      {/* div for answer */}
      {addAns.map((data, ind) => {
        return (
          <div>
            {AnswerType === "Text" ? (
              <>
                <Input
                  type="text"
                  value={data}
                  placeholder="Type Answer Here"
                  style={style}
                  onDoubleClick={()=>updateElementById(ind)}
                />
                <ClearIcon onClick={() => removeElementById(ind)} />
              </>
            ) : AnswerType === "Multiple Choice" ? (
              <>
                <Radio />
                <Input
                  type="text"
                  value={data}
                  placeholder="Enter Here"
                  style={style}
                  onDoubleClick={()=>updateElementById(ind)}
                />
                <ClearIcon onClick={() => removeElementById(ind)} />
              </>
            ) : (
              <>
                <Checkbox />
                <Input
                  type="text"
                  value={data}
                  placeholder="Enter Here"
                  style={style}
                  onDoubleClick={()=>updateElementById(ind)}
                />

                <ClearIcon onClick={() => removeElementById(ind)} />
              </>
            )}
          </div>
        );
      })}

      {/* div for input */}
      <div>
        {AnswerType === "Text" ? (
          <>
            <Input
              type="text"
              value={answer}
              placeholder="Answer Here"
              style={style}
              label="Disabled"
              disabled
            />
          </>
        ) : AnswerType === "Multiple Choice" ? (
          <>
            <Radio />
            <Input
              type="text"
              value={answer}
              placeholder="Enter Here"
              style={style}
              onKeyDown={addItem}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <br></br>
            <Radio />
            <Button onClick={addOption}>Add Option</Button>or{" "}
            <Button style={ButtonStyle} onClick={() => setAnswer("Other")}>
              Add "Other"
            </Button>
          </>
        ) : (
          <>
            <Checkbox />
            <Input
              type="text"
              value={answer}
              placeholder="Enter Here"
              style={style}
              onKeyDown={addItem}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <br></br>
            <Checkbox />
            <Button onClick={addOption}>Add Option</Button>or{" "}
            <Button style={ButtonStyle} onClick={() => setAnswer("Other")}>
              Add "Other"
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
