import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    if(!movies || movies.length === 0) return null;

    const mainMovie = movies[0];

    const {original_title, overview, id, backdrop_path} = mainMovie;
    return (
        <div className="relative bg-black -mb-4">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} backdropPath={backdrop_path} />
        </div>
    );
};

export default MainContainer;