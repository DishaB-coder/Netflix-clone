import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();
    useHorrorMovies();
    
    return (
        movies.nowPlayingMovies && (
        <div className="bg-black w-screen">
            <div className="mt-0 md:-mt-20 lg:-mt-60 pl-3 md:pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                <MovieList title={"Trending Movies"} movies={movies.trendingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                <MovieList title={"Horror Movies"} movies={movies.horrorMovies} />
            </div>
        </div>
        )
    );
};

export default SecondaryContainer;