import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import ModuleAddScreen from "./ModuleAddScreen.js";

import initialModules from "../../components/data/modules.js";
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

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };

  const gotoViewScreen = () =>
    navigation.navigate("ModuleViewScreen", { module, handleDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

// View --------------------------------

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
