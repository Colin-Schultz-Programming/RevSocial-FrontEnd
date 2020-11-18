import React, { SyntheticEvent } from 'react';
import { Form, Input } from 'reactstrap';
import { axiosInstance } from '../../../util/axiosConfig';

export const SearchBar: React.FC = () => {

  const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await axiosInstance.get(`users/username/${event.currentTarget['search'].value}`);

    if (response.data.length === 0) {
      console.log('did not find user');
    } else {
      console.log('found user');
      console.log(response.data)
      sessionStorage.setItem("search", response.data.username);
      window.location.href = '/search';
    }
 }

  return (
    <div >
      <Form onSubmit={handleSubmit} className = "forms search">
        <Input type='text' name='search' placeholder='Search By Username' required />
        <Input type='submit' value='Search' className = 'btn'/>
        
      </Form>
    </div>
  )
}