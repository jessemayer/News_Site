import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const initialState ={
    name: '',
    email: ''
}

const UserList = () => {
    const [formData, setFormData] = useState(initialState)

    const onChange = (event) =>
    setFormData({...formData, [event.target.name]: event.target.value})
   
    // create-post portion of crud
    const postData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = event => {
        event.preventDefault()
        postData()
        setFormData(initialState)
    }

  return (
    <div>
        {/* {console.log(formData)} */}
        <h1>Create a Profile</h1>
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder='name '
                        name='name'
                        value={formData.name}
                        onChange={onChange} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder='email'
                            name='email'
                            value={formData.email}
                            onChange={onChange} />
                </Form.Group>
        
            </Row>
      <Button className="mb-3" variant="outline-primary" type="submit">
        Submit
      </Button>
        </Form>
       
      
    </div>
  )
}

export default UserList
