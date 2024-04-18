import { useCallback, useState } from "react";
import { Container, Button } from "@mui/material";

import type { IPost } from "@api/posts";
import DynamicForm from "@components/common/DynamicForm";
import { UPDATE_POST_FOR_SCHEMA } from "./constants";

type FormProps = Partial<IPost> & { 
  onUpdate: (data: Partial<IPost>) => void; 
  onDelete: (id: string) => void;
}

const UpdateDeletePost: React.FC<FormProps> = ({ 
  id,
  title,
  body,
  onUpdate,
  onDelete
}) => {
  const [formData, setFormData] = useState<Partial<IPost>>({ title, body });

  const handleSubmit = () => {
    const { title, body } = formData;
    if (!title || !body) return alert(`All fields are required`);
    onUpdate(formData);
  };

  const handleDelete = () => {
    if (!id) return;
    onDelete(id);
  };

  const handleFormChange = useCallback((name: string, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  return (
    <Container>
      <DynamicForm
        schema={UPDATE_POST_FOR_SCHEMA}
        formData={formData}
        onChange={handleFormChange}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
      >
        Update Post
      </Button>
      <Button 
        onClick={handleDelete} 
        variant="contained" 
        color="error" 
        style={{ marginLeft: '10px' }}
      >
        Delete Post
      </Button>
    </Container>
  );
};

export default UpdateDeletePost;
