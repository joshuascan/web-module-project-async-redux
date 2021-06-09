import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getJoke } from "../actions";

const Joke = (props) => {
  const { joke, isFetching, error } = props;
  useEffect(() => {
    props.dispatch(getJoke());
  }, []);

  const handleClick = () => {
    props.dispatch(getJoke());
  };

  if (isFetching) {
    return <h2>Fetching a joke for you!</h2>;
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  return (
    <div>
      <p>{joke}</p>
      <div>
        <button onClick={handleClick}>Get new joke</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Joke);
