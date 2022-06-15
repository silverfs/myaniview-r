import { React } from 'react';
import '../css/profile.css';
//import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useUserUpdate } from '../Hooks/useUserUpdate';



export default function UserManager() {
  const { username, anilistname, setUsername, setPassword, setAnilistname, setUpdateUser } = useUserUpdate();
  //if (loading) return <Spinner animation="grow" variant="info" />;
  //if (error) return <div>Whoops! Something went wrong...</div>

  return (
    <>
      <section>
        <h1>User Info</h1>
        <Form className='rounded p-5 p-5'>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              autoComplete='off'
              placeholder='MAV Username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete='off'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="anilistname">
            <Form.Label>Anilist Username</Form.Label>
            <Form.Control
              type="text"
              autoComplete='off'
              placeholder='Anilist Username'
              value={anilistname || ''}
              onChange={(e) => {
                setAnilistname(e.target.value);
              }}
            />
          </Form.Group>
          <Button onClick={setUpdateUser}>Update</Button>
        </Form>
      </section>
    </>
  )
}