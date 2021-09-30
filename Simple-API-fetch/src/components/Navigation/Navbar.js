import React from "react";
import Button from "@material-ui/core/Button";
import "./Navbar.css";
// import Icon from "@material-ui/core/Icon";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

const Navigation = ({ onButtonSubmit, isButtonClicked = true }) => {
  console.log("isButtonClicked", isButtonClicked);
  return (
    <nav className="navbar">
      <h3 className="logo">
        <a href="/" style={{ color: "red", textDecoration: "none" }}>
          LetsGrowMore
        </a>{" "}
      </h3>
      <div className="nav-links">
        {isButtonClicked ? (
          <Button
            variant="contained"
            // className={classes.button}
            // //   endIcon={<Icon>send</Icon>}
            // onClick={onButtonSubmit}
            // color="secondary"
            disabled
          >
            Get Users
          </Button>
        ) : (
          <Button
            variant="contained"
            // className={classes.button}
            //   endIcon={<Icon>send</Icon>}
            onClick={onButtonSubmit}
            color="secondary"
          >
            Get Users
          </Button>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
