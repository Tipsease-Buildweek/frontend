import React from "react";
import { Field, reduxForm } from "redux-form";

const Feedback = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>
            <Field name="rating" component="input" type="radio" value="good" />
            Good
          </label>
          <label>
            <Field name="rating" component="input" type="radio" value="poor" />
            Poor
          </label>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(Feedback);
