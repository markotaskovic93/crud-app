import * as React from "react";
import { TextField } from "@components/form"
import { Box } from "@components/ui"

interface Field {
  name: string;
  label: string;
  type: string;
  multiline?: boolean;
  rows?: number;
}

interface DynamicFormProps {
  schema: Field[];
  formData: Record<string, any>;
  onChange: (name: string, value: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema, formData, onChange }) => {
  const handleInputChange = (name: string, value: any) => {
    onChange(name, value);
  };

  return (
    <Box>
      {schema.map(field => (
        <TextField
          key={field.name}
          variant="outlined"
          margin="normal"
          fullWidth
          id={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          multiline={field.multiline}
          rows={field.rows}
          value={formData[field.name] || ""}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
        />
      ))}
    </Box>
  );
};

export default DynamicForm;
