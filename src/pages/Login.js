import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";
import Header from "../components/layouts/header";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { axios } from "axios";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const onChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Stack spacing={2}>
          <h1>Login Page</h1>
          <Grid container spacing={10}>
            <Typography variant="subtitle1" display="initial">
              Name :{" "}
            </Typography>
            <TextField
              id="outlined-basic"
              label="seller name"
              variant="outlined"
              size="small"
              value={name}
              onChange={onChange}
            />
          </Grid>
          <Button
            variant="contained"
            onClick={() =>
              history.push({
                pathname: "/seller_info",
                state: {},
              })
            }
          >
            Seller Page
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;
