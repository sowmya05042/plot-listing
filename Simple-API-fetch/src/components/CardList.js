import React from "react";
import Card from "./Card";
import "../containers/styles.css";

const CardList = ({ stuffs: stuff }) => {
  return (
    <div>
      {stuff.map((user, i) => {
        return (
          <Card
            pk={i}
            id={stuff[i].id}
            name={stuff[i].first_name}
            lname={stuff[i].last_name}
            email={stuff[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
