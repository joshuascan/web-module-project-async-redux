import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getJoke, selectCategory } from "../actions";

const Joke = (props) => {
  const { joke, isFetching, error, categories, category } = props;
  useEffect(() => {
    props.dispatch(getJoke(""));
  }, []);

  const handleChange = (e) => {
    props.dispatch(selectCategory(e.target.value));
    // console.log("selected: ", e.target.value);
  };

  const handleSubmit = (category) => {
    // console.log("category: ", category);
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
      <div className="joke-text">
        <p>{joke}</p>
      </div>
      <form className="search">
        <select
          onChange={handleChange}
          name="categories"
          id="categories"
          value={category}
        >
          <option value="">-- Select a Category --</option>
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
    category: state.category,
  };
};

export default connect(mapStateToProps)(Joke);
