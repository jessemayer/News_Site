import React, { useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const initialState ={
  id: '',
  name: '',
  email: ''
}

const UpdateProfile = () => {

  const [formData, setFormData] = useState(initialState)

const onChange = (event) => {
  setFormData({...formData, [event.target.name]: event.target.value})
}

const updateData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${formData.id}` , {
    method: 'PUT',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  })
  const data =  await res.json()
        console.log(data)
}
const onSubmit = (event) => {
  event.preventDefault()
  updateData()
  setFormData(initialState)
}

  return (
    <>
    <h1>Edit a Profile</h1>
    <Form onSubmit={onSubmit} >  
            <Row className={'mb-3'}>
                <Form.Group as={Col} >
                    <Form.Label >User ID</Form.Label>
                        <Form.Control 
                            className='form-text mb-1'
                            type="text"
                            placeholder='Enter User ID'
                            name='id'
                            value={formData.id}
                            onChange={onChange}
                            />
                </Form.Group>
            
                <Form.Group as={Col}>
                    <Form.Label >Name</Form.Label>            
                        <Form.Control  
                            className=' mb-'
                            type="text"  
                            name='name'
                            placeholder='Name' 
                            autoComplete= 'off'
                            value={formData.name}
                            onChange={onChange}   
                            />
                </Form.Group>

                

            </Row>
            <Row className="mb-3">
                <Form.Group>
                    <Form.Label >Email</Form.Label>
                        <Form.Control 
                            className='form-text mb-1'
                            type="email"  
                            name='email'
                            placeholder='email' 
                            autoComplete= 'off'
                            value={formData.email}
                            onChange={onChange}
                        />
                </Form.Group>
            </Row>
       <Button className="mb-3" variant="outline-success" type="submit">Submit</Button>
    </Form>
    </>
  )
}

export default UpdateProfile
