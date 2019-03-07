/* eslint-disable */

import React, { Component } from 'react';
import apiBase from '../../config';
import io from 'socket.io-client';
import Game from './Game';
const socket = io(apiBase);
// socket.emit("data", "hey");


class Entry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false,
    }
  }

  componentDidMount() {
    socket.on("connected", (data) => {
      socket.emit("joinRoom", this.props.match.params.id);
    });

    socket.on("Joined room", (data) => {
      console.log(data);
      if (data.length === 2) {
        this.setState({
          start: true,
        })
      }
      console.log("joined rooomm");
    })
    socket.on("Leave room", (data) => {
      alert("your partner left the room :(");
      this.setState({
        start: false,
      })
    })

  }
  render() {
    return (
      <React.Fragment >
        {this.state.start && <Game socket={socket} />}
      </React.Fragment>
    );
  }
}

export default Entry;