import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import { axiosInstance } from '../../../util/axiosConfig';
import { ReactS3Client } from '../../S3ImageSender/ReactToS3';
import  '../profile.scss';

export const UpdatePicture: React.FC = () => {
  const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const image = event.currentTarget['image'].files[0];
    const response = await axiosInstance.get(`/users/picture/${sessionStorage.getItem("username")}`);
        
    if (response.data.length != 0) {
      const file = response.data.substring(response.data.lastIndexOf('/') + 1);
      ReactS3Client.deleteFile(file);
    }

    const data = await ReactS3Client.uploadFile(image);

    await axiosInstance.post('/users/upload',{
      username: sessionStorage.getItem('username'),
      picture: data.location
    });

    window.alert("You have successfully uploaded your profile picture!");
    window.location.href = '/account';
  }
    
  return (
      <div className="pageFormField2">
        <Form onSubmit={handleSubmit} className="pageForms">
          <legend>Upload profile picture</legend>
          <br/>
          <Input type="file" name="image" accept="image/*" required/>
          <br/><br/>
          <Input type="submit" className="btn" value="Upload"/>
        </Form>
    </div>
  )
}