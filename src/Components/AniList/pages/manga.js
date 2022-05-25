import React from 'react';
import '../css/manga.css';
import { useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useManga } from '../Hooks/useManga';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CurrentManga from './currentManga';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Manga() {
  const { id } = useParams();
  const { error, loading, data } = useManga(id);
  if (loading) return <Spinner animation="grow" variant="info" />;
  if (error) return <div>Whoops! Something went wrong...</div>;

  const source = data.Media.description;
  const format = data.Media.format;
  const origin = data.Media.countryOfOrigin;

  const desc = ` <h2>${data.Media.title.romaji}</h2> ${source} <br /> <hr> <p>${format} - ${origin}</p>`


  return <Container fluid key={data.Media.id} className='Profile p-0'>
    <div className='mt-5 manga'>
      <img className='coverImg' src={data.Media.coverImage.extraLarge} alt='Cover' key={data.Media.id} />
      <h3 className='pt-5 mt-4 pl-3 shadow-md'>{data.Media.title.romaji}</h3> <br />
      <h4 className='mt-2 pl-3 shadow-md'>{data.Media.title.native}</h4>
    </div>
    <Container>
      <Row>
        <Col>
          <MarkdownPreview source={desc} className='mt-5 rounded p-3 shadow-lg' />
        </Col>
        <Col>
          <CurrentManga />
        </Col>
      </Row>
    </Container>
  </Container>;
}