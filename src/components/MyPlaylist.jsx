/**
* Componente fusion entre Title y Form
*/
import { SpotifyPlayer } from "./SpotifyPlayer"

export const MyPlaylist = () => {
    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input type='text' className='form-control' placeHolder='Ingrese el codigo
                    del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                        Favorite
                    </label>
                </div>
                <button className='btn btn-success ms-2'><i class="bi bi-plus-circlefill"></i></button>
                <button className='btn btn-danger ms-2'><i class="bi bitrash"></i></button>
            </div>
            <div>
                {
                playlist.map(song => <SpotifyPlayer url= {song.url} favorite={song.favorite} />)
                }

            </div>
        </div>
    )
}

const playlist = [{ url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
                    { url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
                    { url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
                    { url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }];