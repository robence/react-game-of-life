import React, { Component } from "react";
import { connect } from "react-redux";
import {
  makeRandomGrid,
  tick,
  startPlaying,
  stopPlaying,
  clear
} from "../redux/actions/";

import Button from "../components/button";

class Control extends Component {
  componentDidMount() {
    this.props.makeRandomGrid();
    this.togglePlay();
  }

  togglePlay(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.stopPlaying();
    } else {
      let interval = setInterval(this.props.tick,100);
      this.props.startPlaying(interval);
    }
  }
  clear() {
    if (this.props.isRunning) {
      clearInterval(this.props.timerId);
      this.props.stopPlaying();
    }
    this.props.clear();
  }

  render() {
    console.log(this.props);
    return (
      <div className="controls">
        <div className="buttons">
          <Button
            handleClick={() => this.props.makeRandomGrid()}
            title={"Randomise"}
            icon={"fa fa-random"}
          />
          <Button
            handleClick={() => this.clear()}
            title={"Clear"}
            icon={"fa fa-undo"}
          />
          <div className="button-group">
            <Button
              icon={
                this.props.playState.isRunning ? "fa fa-pause" : "fa fa-play"
              }
              handleClick={() => this.togglePlay()}
            />
            <Button
              handleClick={() => this.props.tick()}
              icon={"fa fa-step-forward"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ playState }) => {
  return { playState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeRandomGrid: () => dispatch(makeRandomGrid()),
    tick: () => dispatch(tick()),
    startPlaying: timerId => dispatch(startPlaying(timerId)),
    stopPlaying: () => dispatch(stopPlaying()),
    clear: () => dispatch(clear())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
