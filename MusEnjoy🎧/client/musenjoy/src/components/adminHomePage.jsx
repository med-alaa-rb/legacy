import React, { Component } from "react";
import Sound from "use-sound";

export default class adminHomePage extends Component {
  render() {
    return (
      <Sound
        url="cool_sound.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
