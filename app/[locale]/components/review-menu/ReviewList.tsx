import { Datagrid, List, TextField } from 'react-admin';

export const ReviewList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
    </Datagrid>
  </List>
);
