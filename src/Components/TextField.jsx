import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { FormQuestion } from '../action';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    //   width: '250ch',
    },
  },
}));

export const MyTextField =(props) =>{
  const classes = useStyles();
  const question = useSelector(state => state.changeTheFormQuestion)
  const dispatch = useDispatch()
  return (
      <TextField id="standard-basic" label={props.title}  style={{ width: props.width}}
        value={question}
        onChange={e=>dispatch(FormQuestion(e.target.value))}
        required label="Question"
      />
  );
}
