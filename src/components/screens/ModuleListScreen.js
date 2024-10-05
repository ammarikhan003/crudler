import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  // Initialisations ---------------------
  const modules = initialModules;

  // State -------------------------------
  // Handlers ----------------------------
  const handleSelect = (module) =>
    alert("Item ${module.ModuleSelected} selected"); // is $ part looking like part of the string...
  // View --------------------------------

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
