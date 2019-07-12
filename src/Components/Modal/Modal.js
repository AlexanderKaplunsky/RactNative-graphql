import React, { useState, useEffect } from "react";

import { Text, View, Button, TextInput, StyleSheet } from "react-native";

import Modal from "react-native-modal";

const ModalComponent = ({
  item,
  modalVisible,
  setModalVisible,
  updateSubmit
}) => {
  const { description, priority } = item;
  useEffect(() => {
    setChangedDescription(description);
    setChangedPriority(priority);
  }, [item]);

  const [changedDescription, setChangedDescription] = useState(description);
  const [changedPriority, setChangedPriority] = useState(priority);

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationIn="pulse"
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <View style={{ marginTop: 22 }}>
          <View
            style={{ backgroundColor: "beige", borderRadius: 5, padding: 5 }}
          >
            <View style={styles.column}>
              <Text> Edit description:</Text>
              <TextInput
                multiline={true}
                backgroundColor="#d9d996"
                style={{ width: "100%" }}
                value={changedDescription}
                onChangeText={e => setChangedDescription(e)}
              />
            </View>
            <View style={styles.row}>
              <Text> Set priority:</Text>
              <View style={styles.row}>
                <Button
                  title="down"
                  onPress={() => setChangedPriority(changedPriority - 1)}
                  color="blue"
                />
                <Text style={styles.count}>{changedPriority}</Text>
                <Button
                  title="up"
                  onPress={() => setChangedPriority(changedPriority + 1)}
                  color="green"
                />
              </View>
            </View>
            <Button
              style={styles.button}
              title="Save"
              color="green"
              onPress={() => {
                updateSubmit(item.id, changedDescription, changedPriority);
              }}
            />
            <Button
              style={styles.button}
              title="Close"
              color="red"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  count: {
    fontSize: 14
  },
  button: {
    marginBottom: 5
  }
});

export default ModalComponent;
