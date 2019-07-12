/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useContext, useReducer, Suspense } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import CreateTodo from "./Components/CreateTodo/CreateTodo";
import LoadTodo from "./Components/LoadTodo/LoadTodo";

import reducer from "./reducer";
import Context from "./context";

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const { state } = useContext(Context);
  console.log(state);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <CreateTodo />
      <LoadTodo />
    </Context.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
