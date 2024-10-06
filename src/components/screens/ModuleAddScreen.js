import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleCode: "CI6330",
  ModuleName: "Mobile Application Development",
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: "Graeme JONES",
  ModuleImage: "",
};

export const ModuleAddScreen = (navigation, route) => {
  // Initialisations ---------------------
  const { onAdd } = route.params;

  // State -------------------------------
  // Handlers ----------------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;

  // View --------------------------------

  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
      <Text>Add</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
