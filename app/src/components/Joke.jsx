import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getJoke, selectCategory } from "../actions";

const Joke = (props) => {
  const { joke, isFetching, error, categories } = props;
  const [category, setCategory] = useState("");
  useEffect(() => {
    props.dispatch(getJoke(""));
    console.log("before: ", category);
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (category) => {
    props.dispatch(getJoke(category));
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
      <form className="search">
        <select onChange={handleChange} name="categories" id="categories">
          <option value="">-- Any --</option>
          {categories.map((category, index) => (
            <option value={`?category=${category}`} key={index}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="submit"
          onClick={() => handleSubmit(category)}
          value="Get New Joke"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Joke);
