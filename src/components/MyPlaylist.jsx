/**
* Componente fusion entre Title y Form
*/
import { SpotifyPlayer } from "./SpotifyPlayer"
import { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';


export const MyPlaylist = () => {

    const urlRef = useRef();
    const favoriteRef = useRef();
    /**
* Creamos un hook para actualizar mensajes de alerta
*/
    const [mensaje, setMensaje] = useState('')
    const [playlist, setPlaylist] = useState([{ id: uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
    { id: uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
    { id: uuid(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
    { id: uuid(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }]);


    const addSong = () => {
        // Aca capturamos los datos de los inputs previamente enganchados con el hook useRef
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;

        // Validamos dentro de la funcion addSong que los campos no esten vacios, en caso de estarlo el return detiene la ejecucion de la funcion
        if (url.trim() === '') {
            console.log('campos vacios');
            setMensaje('Campos vacios');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
        }

        // Ahora llamamos a la funcion encargada de modificar el estado de playlist.
        setPlaylist(() => {
            // Creamos un nuevo objeto con las propiedades url y favorite.
            const newSong = {
                id: uuid(),
                url: url,
                favorite: favorite
            };

            // Añadimos el nuevo objeto a la lista playlist, mas adelante cambiaremos la forma de agregar elementos a la lista
            const newplaylist = [...playlist, newSong];
            return newplaylist;
        });
    };
    /**
* Funcion que permitira borrar canciones NO favoritas
*/
    const removeSong = () => {
        /**
        * Nuevamente utilizamos setPlaylist que se encarga de cambiar el estado de la lista
        * para la renderizacion
        */
        setPlaylist(() => {
            /**
            * En este paso simplemente con el metodo filter de lista extraemos los objetos que
            * tengan la propiedad favorite en true y finalmente retornamos esa lista filtrada
            * como una nueva lista
            */
            const newPlaylist = playlist.filter((song) => song.favorite === true);
            return newPlaylist
        })
    }
    /**
* Funcion para modificar el estado favorito de la cancion
*/
    const setFavorite = (id) => {
        setPlaylist(() => {
            /**
            * Obtenemos el listado actual y buscamos mediante el metodo find la canción
            * con el ID recibido.
            * Mas adelante explicaremos como enviar esta ID
            */
            const newPlaylist = [...playlist];
            const song = newPlaylist.find((song) => song.id === id);
            /**
            * Una vez encontrado el objeto con el metodo find procederemos a cambiar su
            * valor booleano.
            */
            song.favorite = !(song.favorite);
            /**
            * retornamos la lista nueva con el cambio realizado
            */
            return newPlaylist;
        });
    }



    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo
                    del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>
                        Favorite
                    </label>
                </div>
                <button onClick={addSong} className='btn btn-success ms-2'><i class="bi bi-plus-circle-fill"></i></button>
                <button onClick={removeSong} className='btn btn-danger ms-2'><i class="bi bi-trash"></i></button>
            </div>
            <div class="alert alert-danger mt-2" role="alert" hidden={!(mensaje)}>
                {mensaje}
            </div>
            <div>
                {
                    playlist.map(song => <SpotifyPlayer song={song} key={song.id} setFavorite={setFavorite} />)
                }

            </div>
        </div>
    )
}

