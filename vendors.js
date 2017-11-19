import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import hyperscriptHelpers from 'hyperscript-helpers';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { combineEpics, createEpicMiddleware } from 'redux-observable';

const combineEpics = window.ReduxObservable.combineEpics;
const createEpicMiddleware = window.ReduxObservable.createEpicMiddleware;

export {
  React,
  ReactDOM,
  h,
  hyperscriptHelpers,
  Router,
  Route,
  Link,
  createStore,
  applyMiddleware,
  Provider,
  connect,
  combineEpics,
  createEpicMiddleware
};
