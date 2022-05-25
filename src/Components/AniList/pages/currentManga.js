import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Spinner from 'react-bootstrap/Spinner';
import { useCurrentManga } from '../Hooks/useCurrentManga';
import '../css/currentManga.css';

export default function CurrentManga() {
  const { error, loading, data } = useCurrentManga("SilverFS");
  if (loading) return <Spinner animation="grow" />;
  if (error) return <div>Whoops! Something went wrong...</div>;

  return <Container className="CurrentManga mt-5 mb-3">
    <CardColumns className='row cardBundle p-2 mt-5 rounded p-3 shadow-lg'>
      {data.Page.mediaList.map(manga => {
        return <Card className='p-0 mb-2 col-2' key={manga.media.id}>
          <Link to={`/manga/${manga.media.id}`}>
              <Card.Img variant="top" src={manga.media.coverImage.medium} alt='coverImage' />
            </Link>
          </Card>
      })}
  </CardColumns>
  </Container >
}