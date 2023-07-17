import React from 'react';
import ReactDOM from 'react-dom/client';

const SpotifyPlayer = () => {
  return (
    <iframe src="https://open.spotify.com/embed/album/2UJcKiJxNryhL050F5Z1Fk" width="100%" height="80" frameborder="0"
      allowfullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  )
}

const MyPlaylist = () => {
  return (
    <div className='container'>
      <h1 className='text-center title mt-5'>My album playlist</h1>
      <div className='d-flex align-items-center'>
        <input className='form-control' type='text' placeholder='Ingrese url album aqui...' />
        <div className="form-check ms-2">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label" for="flexCheckDefault">
            Favorite?
          </label>
        </div>
        <button className='btn btn-success ms-2'><i className="bi bi-bookmark-plus"></i></button>

        <button className='btn btn-danger ms-2'><i className="bi bi-trash"></i></button>
      </div>
      <div className='mt-5 d-flex'>
        < SpotifyPlayer />
        <button className='btn'><i class="bi bi-star-fill"></i></button>
      </div>
    </div>    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyPlaylist />
);

