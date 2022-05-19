import React from 'react';
import { useManga } from '../Hooks/useManga';

export default function Manga() {
  const {error, loading, data } = useManga(124275);
  if (loading) return <div>LOADING...</div>;
  if (error) return <div>Whoops! Something went wrong...</div>;
  console.log()

  return <div className="Manga">
    {console.log(data.Media)}
    <div key={data.Media.id}>
      <h1>{data.Media.title.romaji}</h1>
      <p><b>English: </b>{data.Media.title.english}</p>
      <img src={data.Media.coverImage.medium} alt='coverImage'></img>
      <h3><b>Status: </b>{data.Media.status}</h3>
      <h3><b>Synonyms: </b>{data.Media.synonyms}</h3>

    </div>
  </div>
}