import React from "react";
import styles from "./Header.module.css";
import Searcher from "./Searcher";
import Toggle from "./Toggle";
import { connect } from "react-redux";

let searchByOptions = [
  { value: "release_date", displayName: "Release date" },
  { value: "rating", displayName: "Rating" },
];

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className={styles.container}>
          <h3>
            <b>netflix</b>roulette
          </h3>
          <h1>find your movie</h1>
          <Searcher />
          <Toggle
            name={names}
            options={searchByOptions}
            value={searchBy}
            onChange={(searchBy) => this.setState({ searchBy })}
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy
  };
};

export default connect(mapStateToProps)(Header);
