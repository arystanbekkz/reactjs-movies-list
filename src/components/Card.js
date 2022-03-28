import Rating from "./Rating";

export default function Card( { movie } ) {
    const baseURL = "https://image.tmdb.org/t/p/original/";
    const backgroundStyle = {
        background: `linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%), 
            url(${baseURL + movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div className="card" style={ backgroundStyle }>
            <div className="card-content">
                <div className="rating" movie-rating={Math.round(movie.vote_average / 2)}>
                    <div className="rating-item" item-number="5">★</div>
                    <div className="rating-item" item-number="4">★</div>
                    <div className="rating-item" item-number="3">★</div>
                    <div className="rating-item" item-number="2">★</div>
                    <div className="rating-item" item-number="1">★</div>
                </div>
                <p className="title-name">{movie.title}</p>
            </div>
        </div>
    );
}