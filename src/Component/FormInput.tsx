import React, { FormEvent } from "react";
import { useState } from "react";
import FormOutput from "./FormOutput";

function FormInput() {

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  interface OnChangeLIstener {
    target: { name: string; value: string };
  }

  const [isSubmited, setSubmitted] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    sex: "",
    email: "",
  });

  const { firstName, lastName, age, sex, email } = user;

  const onChange = (e: OnChangeLIstener) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <div>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginRight: "50px" }}>
              FirstName:
              <input
                type="text"
                name="firstName"
                style={{ marginLeft: "10px" }}
                value={firstName}
                onChange={onChange}
              />
            </label>
            <label>
              LastName:
              <input
                type="text"
                name="lastName"
                style={{ marginLeft: "10px" }}
                value={lastName}
                onChange={onChange}
              />
            </label>
          </div>
          <div>
            <label style={{ marginRight: "50px" }}>
              Age:
              <input
                type="text"
                name="age"
                style={{ marginLeft: "10px", width: "20px" }}
                value={age}
                onChange={onChange}
              />
            </label>
            <label>
              sex:
              <select
                style={{ margin: "10px" }}
                name="sex"
                value={sex}
                onChange={onChange}
              >
                <option value="male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                style={{ marginLeft: "10px", marginBottom: "10px" }}
                value={email}
                onChange={onChange}
              />
            </label>
            <div>
              <input type="Submit" name="save" />
            </div>
          </div>
        </form>

        {isSubmited ? <FormOutput {...user} /> : null}
      </div>
    </div>
  );
}

export default FormInput;
