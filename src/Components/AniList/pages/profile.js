import { React } from 'react';
import '../css/profile.css';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useProfile } from '../Hooks/useProfile';
import CurrentManga from './currentManga';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Profile() {
  const { error, loading, data } = useProfile("SilverFS");
  if (loading) return <Spinner animation="grow" variant="info" />;
  if (error) return <div>Whoops! Something went wrong...</div>

  const source = data.User.about;
  

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
          <MarkdownPreview source={source} className='mt-5 rounded p-3 shadow-lg' />
        </Col>
        <Col>
          <CurrentManga />
        </Col>
      </Row>
    </Container>
  </Container>;
}