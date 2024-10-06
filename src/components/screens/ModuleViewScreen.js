import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";

export const ModuleViewScreen = (navigation, route) => {
  // Initialisations ---------------------
  const { module, handleDelete } = route.params;

  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------

  return (
    <Screen>
      <ModuleView module={module} onDelete={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
