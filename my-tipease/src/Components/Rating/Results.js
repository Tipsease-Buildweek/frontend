import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Results = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
    
      <div>
        <label>Rating</label>
        <div>
          <label>
            <Field name="rating" component="input" type="radio" value="good" />
            {' '}
            Good
          </label>
          <label>
            <Field name="rating" component="input" type="radio" value="poor" />
            {' '}
            Poor
          </label>
        </div>
      </div>
  
    
      <div>
        <label>Comments</label>
        <div>
          <Field name="comments" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'feedback',
})(Results);