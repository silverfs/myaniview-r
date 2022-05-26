import React from 'react';
import '../css/manga.css';
import { useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useManga } from '../Hooks/useManga';
import Container from 'react-bootstrap/Container';
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

  const desc =
    ` <h2>${data.Media.title.romaji}</h2><br />
        ${source} <br /> 
        <hr> 
      <p>
        ${format} - ${origin}
      </p>
  `

  const stats =
    ` **Format** <br />${data.Media.format} <br />
    \n **Status** <br />${data.Media.status} <br />
    \n **Romaji** <br />${data.Media.title.romaji} <br />
    **English** <br />${data.Media.title.english} <br />
    **Native** <br />${data.Media.title.native} <br />
    \n **Source** <br />${data.Media.source}
  `

  return <Container fluid key={data.Media.id} className='p-0'>
    <Row className='mr-0'>
      <Col className='mt-5 col-3'>
        <div className='manga'>
          <img className='coverImg mt-5 shadow-lg' src={data.Media.coverImage.extraLarge} alt='Cover' key={data.Media.id} />
        </div>
        <div className='stats mt-5'>
          <MarkdownPreview source={stats} className='inStats rounded shadow-lg' />
        </div>
      </Col>
      <Col className='mt-5 col-7'>
        <div className='description'>
          <MarkdownPreview source={desc} className='mt-5 rounded p-3 shadow-lg mr-5' />
        </div>
      </Col>
    </Row>
  </Container>;
}