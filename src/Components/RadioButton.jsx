import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import { Checkbox, Input } from "@material-ui/core";
import { uid } from "react-uid";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";
import { FormAnswerList, FormAnswerType } from "../action";



export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const style = {
    width: "70ch",
    margin: 20,
  };
  const [answer, setAnswer] = useState();
  const [addAns, setAddAns] = useState([]);
  const dispatch = useDispatch()
  
  const AnswerType = useSelector((state) => state.changeTheFormAnswerType);
  

  const addItem = (e) => {
    if (e.key === "Enter") {
      if (!answer) {
      } else {
        setAddAns([...addAns, answer]);
        dispatch(FormAnswerList(addAns))
        setAnswer("");
      }
    }
  };

  useEffect(() => {
    dispatch(FormAnswerType(props.actionType))
  }, [props.actionType]);

  const removeElementById = async (id) => {
    const filteredData = await addAns.filter((data,ind)=> { return ind !== id})
    setAddAns(filteredData)
    dispatch(FormAnswerList(filteredData))
  };

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
                />
                <ClearIcon onClick={() => removeElementById(ind)} />
              </>
            ) : AnswerType === "Single Select radio" ? (
              <>
                <Radio />
                <Input
                  type="text"
                  value={data}
                  placeholder="Enter Here"
                  style={style}
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
            />
          </>
        ) : AnswerType === "Single Select radio" ? (
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
          </>
        )}
      </div>

    </div>
  );
}
