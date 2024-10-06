import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  // State -------------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers ----------------------------
  const handleDelete = (module) => {
    module = modules.filter((item) => item.ModuleID !== module.ModuleID);
    console.log("Module ${module.ModuleCode} deleted");
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const handleSelect = () =>
    navigation.navigate("ModuleViewScreen", { module, handleDelete });
};

// View --------------------------------

return (
  <Screen>
    <ModuleList modules={modules} onSelect={handleSelect} />
  </Screen>
);

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
