import axios from "axios";

const Results = id => {
  axios
    .put(`https://build-tipsease.herokuapp.com/serviceWorkers/rate/${id}`)
    .then(res => console.log(response))
    .catch(err => console.log(err));

  return (
    <div>
      <h2>Thank you for using Tipease!</h2>
      <h3>We appreciate your feedback</h3>
    </div>
  );
};

export default Results;