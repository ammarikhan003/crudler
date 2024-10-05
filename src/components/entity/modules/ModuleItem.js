import { Pressable, StyleSheet, Text, View, Pressable } from "react-native";

const ModuleItem = ({ module, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  const handleSelect = () => onSelect(module);

  // View --------------------------------
  return (
    <Pressable onPress={() => onSelect(module)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    onSize: 16,
  },
});

export default ModuleItem;
