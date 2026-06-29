import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId, backdropPath}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);

    return (
        <div className="w-screen loading-none">
            {trailerVideo ? (
                <iframe
                    className="w-screen aspect-video"
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
                <img
                    className="w-screen aspect-video object-cover"
                    src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
                    alt="movie backdrop"
                />
            )}
        </div>
    );
};

export default VideoBackground;