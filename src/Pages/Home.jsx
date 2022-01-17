import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { getForm } from "../Services/FormApi";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useNavigate } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "solid 1px rgb(103,58,183)",
    height: 150,
  },
  paper1: {
    color: theme.palette.text.secondary,
    border: "solid 1px rgb(103,58,183)",
  },
  divHight: {
    height: 120,
  },

  pfont: {
    fontSize: 10,
    color: "black",
  },
}));
export const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [FromData, setFormData] = useState([]);
  useEffect(async () => {
    const result = await getForm();
    setFormData(result);
    console.log("response data from form ", result);
  }, []);
  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ dextDecoration: "none" }}>
        <Grid item xs={2}>
          <NavLink to="/form">
            <Paper className={classes.paper}>
              <div>
                <p>Add New Form</p>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
                <p>Click Here</p>
              </div>
            </Paper>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Template 1
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Template 2
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Template 3
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Template 4
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Template 5
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <h3>Recent Forms</h3>
      <Grid container spacing={3} style={{ dextDecoration: "none" }}>
        {FromData.map((data, ind) => {
          return (
            <>
              <Grid item xs={2} key={ind} style={{textAlign : "center"}} onClick={()=>navigate(`/form/${data._id}`,true)}>
                <Paper className={classes.paper1}>
                  <div className={classes.divHight}></div>
                  <hr></hr>
                  <div>
                    <h4>{data.title}</h4>
                    <p className={classes.pfont}>
                      {data.createdAt}
                      <span>
                        <MoreVertIcon />
                      </span>
                    </p>
                  </div>
                 
                </Paper>
                <h5>{data.formName}</h5>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};
