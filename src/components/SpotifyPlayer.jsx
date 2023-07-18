/**
* Playlist component que ahora recibe un objeto song para destructuring y una funcion
setFavorite
*/
export const SpotifyPlayer = ({ song, setFavorite }) => {
    /**
    * Aplicamos destructuring para obtener id, url y favorite del objeto enviado
    */
    const { id, url, favorite } = song;
    /**
    * Contruimos url para mostrar album
    */
    const urlSong = "https://open.spotify.com/embed/album/" + url;
    /**
    * Creamos la funcion newfavorite que permitira retornar la funcion setFavorite junto al
    ID especifico del componente que sera ejecutado por el evento onClick del botón con la
    estrella
    */
    const newFavorite = () => setFavorite(id);
    /**
    * Render que se ejecuta si el album es favorito
    */
    if (favorite) {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write;
    encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button onClick={newFavorite} className="btn">
                    <i className="bi bi-star-fill"></i>
                </button>
            </div>
        );
    }
    /**
    * Render que se ejecuta si el album no es favorito
    */
    else {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write;
                encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button onClick={newFavorite} className="btn">
                    <i className="bi bi-star"></i>
                </button>
            </div>
        );
    }
};
