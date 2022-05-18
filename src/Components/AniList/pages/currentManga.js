import React from 'react';
import { useCurrentManga } from '../Hooks/useCurrentManga';

export default function CurrentManga() {
  const {error, loading, data } = useCurrentManga("SilverFS");
  if (loading) return <div>LOADING...</div>;
  if (error) return <div>Whoops! Something went wrong...</div>;
  console.log()

  return <div className="CurrentManga">
    {data.Page.mediaList.map(manga => {
      return <div key={manga.media.id}>  
        <h1>{manga.media.title.romaji}</h1>
        <p><b>English: </b>{manga.media.title.english}</p>
        <img src={manga.media.coverImage.medium} alt='coverImage'></img>
      </div> 
    })}
  </div>
}