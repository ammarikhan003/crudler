import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import ModuleAddScreen from "./ModuleAddScreen.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ignoreWarnings from "../../utils/ignoreWarnings";
import API from "../API/API.js";
import RenderCount from "../UI/RenderCount.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations ---------------------
  ignoreWarnings();
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/";

  // State -------------------------------
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setModules(response.result);
  };

  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);

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
