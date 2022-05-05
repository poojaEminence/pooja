import React from "react";

function UpdateForm(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label for="fname">company Name</label>
        <input
          type="text"
          id="fname"
          name="company"
          value={props.user.company}
          onChange={props.handleChange}
        />

        <label for="lname">ticker</label>
        <input
          type="text"
          id="lname"
          name="ticker"
          value={props.user.ticker}
          onChange={props.handleChange}
        />
        <label for="lname">stockPrice Name</label>
        <input
          type="text"
          id="lname"
          name="stockPrice"
          value={props.user.stockPrice}
          onChange={props.handleChange}
        />
        <label for="fname">timeElapsed Name</label>
        <input
          type="text"
          id="fname"
          name="timeElapsed"
          value={props.user.timeElapsed}
          onChange={props.handleChange}
        />

        <input type="submit" />
      </form>
    </>
  );
}

export default UpdateForm;
