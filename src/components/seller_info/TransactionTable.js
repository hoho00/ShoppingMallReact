import TextField from "@mui/material/TextField";
const TransactionTable = () => {
  return (
    <div>
      <p>
        user id :{" "}
        <TextField
          id="outlined-basic"
          label="input user id"
          variant="outlined"
        />
      </p>
      <p>
        xpub :{" "}
        <TextField id="outlined-basic" label="input xpub" variant="outlined" />
      </p>
    </div>
  );
};

export default TransactionTable;
