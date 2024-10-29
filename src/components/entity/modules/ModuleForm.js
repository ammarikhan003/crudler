import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import useLoad from "../../API/useLoad.js";
import Icons from "../../UI/Icons.js";
import { Button, ButtonTray } from "../../UI/Button.js";
import Form from "../../UI/Form.js";

const defaultModule = {
  ModuleID: null, // Math.floor(100000 + Math.random() * 900000)
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleYearID: null,
  ModuleLeaderID: null,
  ModuleImageURL: null,
};

export const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage = "";

  const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";
  const staffEndpoint = "https://softwarehub.uk/unibase/api/users/staff";

  const levels = [
    { value: 3, label: "3 (Foundation)" },
    { value: 4, label: "4 (First year)" },
    { value: 5, label: "5 (Second year)" },
    { value: 6, label: "6 (Final year)" },
    { value: 7, label: "7 (Masters)" },
  ];

  // State -------------------------------
  const [module, setModule] = useState(originalModule || defaultModule);
  const [years, , isYearsLoading] = useLoad(yearsEndpoint);
  const [leaders, , isLeadersLoading] = useLoad(staffEndpoint);

  // Handlers ----------------------------
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  const handleSubmit = () => onSubmit(module);

  // View --------------------------------
  const submitLabel = originalModule ? "Modify" : "Add";
  const submitIcon = originalModule ? <Icons.Edit /> : <Icons.Add />;

  const cohorts = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));
  const staff = leaders.map((leader) => ({
    value: leader.UserID,
    label: " ${leader.UserFirstname} ${leader.UserLastname}",
  }));

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

      <Form.InputSelect
        label="Module cohort"
        prompt="Select module year..."
        options={cohorts}
        value={module.ModuleYearID}
        onChange={(value) => handleChange("ModuleYearID", value)}
        isLoading={IsYearsLoading}
      />

      <Form.InputSelect
        label="Module leader"
        prompt="Select module leader..."
        options={staff}
        value={module.ModuleLeaderID}
        onChange={(value) => handleChange("ModuleLeaderID", value)}
        isLoading={isLeadersLoading}
      />

      <Form.InputText
        label="Module Image URL"
        value={module.ModuleImageURL}
        onChange={(value) => handleChange("ModuleImageURL", value)}
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
