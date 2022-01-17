/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const MyAutoComplete = (props) => {
  const [ansType, setAnsType] = useState("");
  useEffect(() => console.log(ansType), []);
  return (
    <Autocomplete
      id={props.title}
      options={props.Options}
      getOptionLabel={(option) => option.title}
      style={{ width: 240 }}
      renderInput={(params) => (
        <TextField {...params} label={props.title} variant="outlined" />
      )}
      onChange={(event, value) => setAnsType(value.title)} 
     
    />
  );
};
