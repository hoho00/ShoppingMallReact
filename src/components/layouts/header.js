import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="subtitle1">Bitcoin Shopping Mall</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => history.push("/seller_info/goods_table")}
          >
            Seller Page
          </Button>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  );
};

export default Header;
