import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";

import GetTodoList from "./GetTodoList";
import MakeComplete from "./MakeComplete";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";

import ModalComponent from "../Modal/Modal";

import Content from "../../context";

const LoadTodo = () => {
  const { state, dispatch } = useContext(Content);
  const [modalComponentProps, setModalComponentProps] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    GetTodoList({ state, dispatch });
  }, [state.isCompleted, state.sort]);

  const setTypeOfTask = () => {
    dispatch({ type: "SET_COMPLETED", payload: !state.isCompleted });
  };

  const configureModalComponent = item => {
    setModalComponentProps(item);
    setModalVisible(true);
  };

  const updateSubmit = (id, changedDescription, changedPriority) => {
    setModalVisible(false);
    UpdateTask({ id, changedDescription, changedPriority, state, dispatch });
  };

  const todoList = state.todoList;
  return (
    <View>
      <ModalComponent
        item={modalComponentProps}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        updateSubmit={updateSubmit}
      />
      <View
        style={{
          ...styles.todoElementWrapper,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Button
          color="red"
          title={`Show ${state.isCompleted ? "current" : "completed"}`}
          onPress={setTypeOfTask}
        />
      </View>
      <ScrollView>
        {todoList &&
          todoList.map((item, key) => {
            return (
              <View id={key} style={styles.todoElementWrapper}>
                <View style={styles.todoDescriptionWrapper}>
                  <TouchableOpacity
                    onPress={() => configureModalComponent(item)}
                  >
                    <Text
                      style={
                        !item.completed
                          ? styles.todoElement
                          : styles.todoElementComplete
                      }
                    >
                      {item.description}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Button
                    style={styles.button}
                    title="Delete"
                    color="red"
                    onPress={() => DeleteTask(item.id, { state, dispatch })}
                  />
                  <Button
                    style={styles.button}
                    title={`Make ${
                      state.isCompleted ? "available" : "complete"
                    }`}
                    color="green"
                    onPress={() => MakeComplete(item, { state, dispatch })}
                  />
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todoElement: {
    textAlign: "center"
  },
  todoElementComplete: {
    textAlign: "center",
    textDecorationLine: "line-through"
  },
  todoElementWrapper: {
    paddingBottom: 2,
    borderBottomWidth: 1
  },
  todoDescriptionWrapper: {
    minHeight: 30,
    backgroundColor: "beige",
    justifyContent: "center",
    padding: 2
  },
  button: {
    width: 500
  }
});

export default LoadTodo;
