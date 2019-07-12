import React, { useState, useContext } from "react";

import AddTodo from "./AddTodo";
import Context from "../../context";

import { View, Button, TextInput } from "react-native";

const CreateTodo = () => {
  const { state, dispatch } = useContext(Context);
  const [description, setDescription] = useState("");
  const createTodo = () => {
    setDescription("");
    AddTodo(description, { state, dispatch });
  };
  return (
    <View>
      <TextInput
        onChangeText={e => setDescription(e)}
        value={description}
        multiline={true}
      />
      <Button onPress={createTodo} title="Add item" />
    </View>
  );
};

export default CreateTodo;
