import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ReviewEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" fullWidth />
      <TextInput source="mini" fullWidth />
      <TextInput source="author" fullWidth />
      <TextInput source="podyaka" fullWidth />
      <TextInput source="description" fullWidth />
      <TextInput source="body" fullWidth />
    </SimpleForm>
  </Edit>
);