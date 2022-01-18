import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const MyCheckbox = (props) => {
  const [state, setState] = React.useState();
  const [ansData, setAnsData] = useState([]);

  useEffect(() => {
    setAnsData([...ansData, state]);
  }, [state]);

  const handleChange = (event) => {
    setState(event.target.name);
    // alert(state)
  };
  // console.log(ansData);
  return (
    <FormGroup>
      {props.AnswerList.map((data, ind) => {
        return (
          <ul>
            <FormControlLabel
              key={ind}
              control={<Checkbox onChange={handleChange} name={data} />}
              label={data}
            />
          </ul>
        );
      })}
    </FormGroup>
  );
};
