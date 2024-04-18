import type { IPost } from "@api/posts";
import DynamicForm from "@components/common/DynamicForm";
import { Container, Button } from "@components/ui";
import { useCallback, useState } from "react";
import { CREATE_POST_FOR_SCHEMA } from "./constants";


type FormProps = Partial<IPost> & { 
  onPostCreate: (post: Partial<IPost>) => void;
}

const CreatePost: React.FC<FormProps> = ({
  onPostCreate
}) => {
  const initialFormData = { title: '', body: '' }
  const [formData, setFormData] = useState<Partial<IPost>>(initialFormData);

  const handleFormChange = useCallback((name: string, value: any) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  const handlePostCreate = () => {
    const { title, body } = formData;
    if (!title || !body) return alert('All filed are required!');

    onPostCreate(formData);
  }

  return (
    <Container>
      <DynamicForm
        schema={CREATE_POST_FOR_SCHEMA}
        formData={formData}
        onChange={handleFormChange}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        onClick={handlePostCreate}
      >
        Save
      </Button>
    </Container>
  );
};

export default CreatePost;