import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons";

const ModuleView = ({ module, onDelete, onModify }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  const handleDelete = () => onDelete(module);

  const requestDelete = () =>
    Alert.alert(
      "Delete warning",
      "Are you sure you want to delete the module ${module.ModuleCode} ${module.ModuleName}",
      [{ text: "cancel" }, { text: "delete", onPress: handleDelete }]
    );

  // View --------------------------------

  return (
    <View style={style.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImageURL }}
        style={style.image}
      />

      <View style={style.infoTray}>
        <Text style={style.boldText}>
          {module.ModuleCode} {module.ModuleName}{" "}
        </Text>
        <Text style={style.text}>Level {module.ModuleLevel}</Text>
        <Text style={style.text}>
          {module.ModuleLeaderName}
          <Text style={style.dimText}>(Module Leader)</Text>
        </Text>
      </View>
      <ButtonTray>
        <Button icon={<Icons.Edit />} label="Modify" onClick={onModify} />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          onClick={requestDelete}
        />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dialText: {
    color: "grey",
  },
});

export default ModuleView;
