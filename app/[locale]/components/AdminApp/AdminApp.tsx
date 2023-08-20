
'use client'

import { Admin, Resource } from 'react-admin';
import { ReviewList } from '../review-menu/ReviewList';
import { ReviewEdit } from '../review-menu/ReviewEdit';
import { ReviewCreate } from '../review-menu/ReviewCreate';






const AdminApp = () => (
  <Admin >
    <Resource name="reviews" 
              list={ReviewList}
              edit={ReviewEdit}
              create={ReviewCreate}/>
  </Admin>
);

export default AdminApp;

