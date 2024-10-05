import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons";

const ModuleView = ({ module }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------

  return (
    <View style={style.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
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
        <Button icon={<Icons.Edit />} label="Modify" />
        <Button
          icon={<Icons.Delete />}
          label="Delete"
          styleButton={{ backgroundColor: "mistyrose" }}
          styleLabel={{ color: "red" }}
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
