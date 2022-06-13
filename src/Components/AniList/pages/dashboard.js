import { React } from 'react';
import '../css/profile.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useProfile } from '../Hooks/useProfile';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Dashboard() {
  const { error, loading, data } = useProfile("SilverFS");
  if (loading) return <Spinner animation="grow" variant="info" />;
  if (error) return <div>Whoops! Something went wrong...</div>

  

  return <Container fluid key={data.User.id} className='p-0'>
    <Jumbotron className='profileBanner' style={{ backgroundImage: `url('${data.User.bannerImage}')`}}>
      <div className='mt-5 profile'>
        <img className='pfp' src={data.User.avatar.medium} alt='pfp' />
        <h3 className='pt-5 mt-4 pl-3 shadow-md'>{data.User.name}</h3>
      </div>
    </Jumbotron>
    <Container>
      <Row>
        <Col>
            <h2>Welcome, <b>{localStorage.getItem('username')}</b></h2>
        </Col>
        <Col>
          
        </Col>
      </Row>
    </Container>
  </Container>;
}