import {
  Button,
  Checkbox,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function App() {
  let [number, setNumber] = useState({
    first: "",
    second: "",
    third: "",
  });
  let [checkbox, setCheckbox] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [isOpen, setisOpen] = useState(false);

  let [result, setResult] = useState(0);

  const handleClose = () => {
    setisOpen((isOpen) => !isOpen);
  };

  const handleChange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setCheckbox({ ...checkbox, [e.target.id]: e.target.checked });
  };
  const printSum = ({ e, name }) => {
    e.preventDefault();
    const countTrueCheckbox = Object.values(checkbox).filter(
      (a) => a === true
    ).length;

    if (countTrueCheckbox <= 1) {
      handleClose();
      return;
    }

    let total = 0;
    switch (name) {
      case "multiply":
        total = Object.values(number)
          .filter((numb) => numb !== "")
          .reduce((t, n) => Number(t) * Number(n));
        setResult(total);
        break;
      case "division":
        total = Object.values(number)
          .filter((numb) => numb !== "")
          .reduce((t, n) => Number(t) / Number(n));
        setResult(total);
        break;
      case "plus":
        total = Object.values(number).reduce((t, n) => Number(t) + Number(n));
        setResult(total);
        break;
      case "minus":
        total = Object.values(number).reduce((t, n) => Number(t) - Number(n));
        setResult(total);
        break;
      default:
        break;
    }
  };

  const { first, second, third } = checkbox;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Operasi minimal 2 Input"
      />
      <Grid container spacing={2} alignContent="center" alignItems="center">
        <Grid xs={12} item>
          <TextField
            variant="outlined"
            onChange={handleChange}
            name="first"
            type="number"
          />
          <Checkbox checked={first} onChange={handleCheckbox} id="first" />
        </Grid>
        <Grid xs={12} item>
          <TextField
            variant="outlined"
            onChange={handleChange}
            name="second"
            type="number"
          />
          <Checkbox checked={second} onChange={handleCheckbox} id="second" />
        </Grid>
        <Grid xs={12} item>
          <TextField
            variant="outlined"
            onChange={handleChange}
            name="third"
            type="number"
          />
          <Checkbox checked={third} onChange={handleCheckbox} id="third" />
        </Grid>
        <Grid xs={12} item>
          <Button
            onClick={(e) => printSum({ e, name: "plus" })}
            id="plus"
            color="primary"
          >
            <AddIcon />
          </Button>
          <Button
            onClick={(e) => printSum({ e, name: "minus" })}
            id="minus"
            color="primary"
          >
            <RemoveIcon />
          </Button>
          <Button
            onClick={(e) => printSum({ e, name: "multiply" })}
            id="multiply"
            color="primary"
          >
            <CloseIcon />
          </Button>
          <Button
            onClick={(e) => printSum({ e, name: "division" })}
            id="division"
            color="primary"
          >
            <MoreVertIcon />
          </Button>
        </Grid>
        <Grid xs={12} item>
          <Typography variant="h6">Hasilnya = {result}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
