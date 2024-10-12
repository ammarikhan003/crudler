import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "../../UI/Icons.js";
import { Button, ButtonTray } from "../../UI/Button.js";
import Form from "../../UI/Form.js";

const defaultModule = {
  ModuleID: null, // Math.floor(100000 + Math.random() * 900000)
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};

export const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage = "";

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First year)" },
    { value: 5, label: "5 (Second year)" },
    { value: 6, label: "6 (Final year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  // State -------------------------------
  const [module, setModule] = useState(originalModule || defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);

  // View --------------------------------
  const submitLabel = originalModule ? "Modify" : "Add";
  const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module Code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />

      <Form.InputText
        label="Module Name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />

      <Form.InputSelect
        label="Module Level"
        prompt="Select module level..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />

      <Form.InputText
        label="Module Leader"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />

      <Form.InputText
        label="Module Image URL"
        value={module.ModuleImage}
        onChange={(value) => handleChange("ModuleImage", value)}
      />

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={handleSubmit} />
        <Button label="Cancel" icon={<Icons.Close />} onClick={onCancel} />
      </ButtonTray>
      <Text>Add</Text>
    </Form>
  );
};

const styles = StyleSheet.create({});

export default ModuleForm;
