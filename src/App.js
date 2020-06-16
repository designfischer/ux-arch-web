import React from 'react';
import Routes from './routes'
import './App.css'

const brain = require('brain.js');

function App() {
  const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

  const trainingData = [
    { input: [parseInt(0), parseInt(0)], output: [parseInt(0)] },
    { input: [parseInt(0), parseInt(1)], output: [parseInt(1)] },
    { input: [parseInt(1), parseInt(0)], output: [parseInt(1)] },
    { input: [parseInt(1), parseInt(1)], output: [parseInt(0)] },
  ];

  net.train(trainingData);

  console.log(net.run([parseInt(0), parseInt(0)]));

  return (
    <Routes />
  );
}

export default App;
