import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

import initialModules from "../../data/modules.js";
import { Button, ButtonTray } from "../UI/Button.js";

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

  const handleAdd = (module) => setModules([...modules, module]);

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const gotoViewScreen = () =>
    navigation.navigate("ModuleViewScreen", { module, handleDelete });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
};

// View --------------------------------

return (
  <Screen>
    <ButtonTray>
      <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
    </ButtonTray>
    <ModuleList modules={modules} onSelect={gotoViewScreen} />
  </Screen>
);

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
