import { Create, SimpleForm, TextInput } from 'react-admin';

export const ReviewCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id"/>
      <TextInput source="title" />
      <TextInput source="mini" />
      <TextInput source="author" />
      <TextInput source="podyaka" />
      <TextInput source="description" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);