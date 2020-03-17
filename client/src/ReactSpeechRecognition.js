import React, { Component } from "react";
import PropTypes from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SpeechRecognition from "react-speech-recognition";
import "./ReactSpeechRecognition.css";

const propTypes = {
  // Props injected by SpeechRecognition
  autoStart: PropTypes.bool,
  continuous: PropTypes.bool,
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  listening: PropTypes.bool,
  interimTranscript: PropTypes.string,
  finalTranscript: PropTypes.string,
  recognition: PropTypes.object
};

const Dictaphone = ({
  autoStart,
  continuous,
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  browserSupportsSpeechRecognition,
  listening,
  interimTranscript,
  finalTranscript,
  recognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  recognition.onstart = function() {
    console.log('Speech recognition service has started');
  }
  // console.log(finalTranscript)

  return (
    <div>
      <hr />
      <Container id="buttonContainer">
        <Row>
          <Col>
            <Button id="startButton" onClick={startListening}>
              Start Recording
            </Button>
          </Col>
          <Col>
            <Button id="stopButton" onClick={stopListening}>
              Stop Recording
            </Button>
          </Col>
          <Col>
            <Button id="resetButton" onClick={resetTranscript}>
              Reset Records
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
      <br />
      <Jumbotron>
        <Container id="transcriptContainer">
          <h5 id="transcriptField">{finalTranscript/*switch this out with the word transcript*/}</h5>
        </Container>
      </Jumbotron>
    </div>
  );
};

Dictaphone.continuous = true;
// This is set to true by default for continuous recording after start button
// Set to false and it will only record the one sentence it hears
Dictaphone.autoStart = false;
Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);