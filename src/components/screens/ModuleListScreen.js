import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useLoad from "../API/useLoad.js";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import ModuleAddScreen from "./ModuleAddScreen.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ignoreWarnings from "../../utils/ignoreWarnings";
import RenderCount from "../UI/RenderCount.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  ignoreWarnings();
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/";

  // State -------------------------------
  const [modules, setModules, isLoading, loadModules] =
    useLoad(modulesEndpoint);

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
      <RenderCount />
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      {isLoading && <Text>Loading records ...</Text>}
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

// View --------------------------------

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
