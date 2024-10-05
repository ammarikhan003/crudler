import { Pressable, StyleSheet, Pressable } from "react-native";
import ModuleItem from "../entity/modules/ModuleItem.js";

const ModuleList = (modules, onSelect) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <ScrollView style={styles.container}>
      {modules.map((modules) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onSelect={handleSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
