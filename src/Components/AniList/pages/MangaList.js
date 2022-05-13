import React from 'react';
import { useMangaList } from '../Hooks/useMangaList';

export default function MangaList() {
  const {error, loading, data } = useMangaList();
  if (loading) return <div>LOADING...</div>;
  if (error) return <div>Whoops! Something went wrong...</div>

  return <div className="MangaList">
    {data.Page.media.map(manga => {
      return <div key={manga.id}>        
          <h2>{manga.title.romaji}</h2>
          <img src={manga.coverImage.medium} alt='Cover' />
        </div>
    })}
  </div>;
}
