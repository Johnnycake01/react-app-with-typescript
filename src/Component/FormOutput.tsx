import React from "react";
import "../App.css";
interface IUserModel {
  firstName: string;
  lastName: string;
  age: string;
  sex: string;
  email: string;
}

function FormOutput(props: IUserModel) {
  return (
    <div className="FormOutPutContainer">
      <div>
        <div className="FormData">
          <p>First Name: {props.firstName}</p>
        </div>

        <div className="FormData">
          <p>Last Name: {props.lastName}</p>
        </div>
        <div className="FormData">
          <p>Age : {props.age}</p>
        </div>
        <div className="FormData">
          <p>Sex: {props.sex}</p>
        </div>

        <div className="FormData">
          <p>Email address: {props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default FormOutput;
