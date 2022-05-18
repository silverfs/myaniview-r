import React from 'react';
import { useProfile } from '../Hooks/useProfile';

export default function Profile() {
  const {error, loading, data } = useProfile();
  if (loading) return <div>LOADING...</div>;
  if (error) return <div>Whoops! Something went wrong...</div>

  return <div className="Profile">
    <div key={data.User.id}>
        <img src={data.User.bannerImage} alt='banner' />      
        <h2>{data.User.name}</h2>
        <img src={data.User.avatar.medium} alt='pfp' />
    </div>
   
  </div>;
}
