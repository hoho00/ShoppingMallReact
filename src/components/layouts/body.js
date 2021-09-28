import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
//import PaymentModal from "bitcoin_payment_module_modal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const Body = () => {
  const [goods, setGoods] = useState([]);
  const [visible, setVisible] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    let get = async () => {
      let res = await axios.get("http://localhost:3001/api/goods");
      //console.log(res.data.result);
      setGoods(res.data.result);
    };
    get();
    console.log(goods);
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {goods.map((item) => (
          <Paper
            className={classes.paper}
            onClick={() => {
              setVisible(true);
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>ss</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{item.name}</Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
      {/* <PaymentModal
        visible={visible}
        userId={8}
        price={goods.length == 0 ? 0 : goods[0].price}
        onEnd={() => alert("AAAAAA")}
        onClose={() => {
          setVisible(false);
        }}
      /> */}
    </>
  );
};

export default Body;
