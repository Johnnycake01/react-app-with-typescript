import React, { FormEvent } from "react";

function FormInput() {
    const handleSave = (event: FormEvent) => {
        event.preventDefault()
        console.log(event.target.addEventListener)
    }
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <div>
        <form onSubmit={handleSave}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ marginRight: "50px" }}>
              FirstName:
              <input
                type="text"
                name="firstName"
                style={{ marginLeft: "10px" }}
              />
            </label>
            <label>
              LastName:
              <input
                type="text"
                name="lastName"
                style={{ marginLeft: "10px" }}
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
              />
            </label>
            <label>
              sex:
              <select style={{ margin: "10px" }}>
                <option selected value="male">
                  Male
                </option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>
              Email:
              <input type="email" name="Email" style={{ marginLeft: "10px" }} />
            </label>
            <div>
              <input type="button" name="save" value="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
    
}



export default FormInput;
