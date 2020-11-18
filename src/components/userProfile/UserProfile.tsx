import React from 'react';
import { UpdateInfo } from './updateInfo/UpdateInfo';
import { UpdatePicture } from './updatePicture/UpdatePicture';

export const UserProfile: React.FC = () => {
  return (
    <div>
      <UpdatePicture />
      <UpdateInfo />
    </div>
  )
}