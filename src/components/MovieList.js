import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;
    
    return (
        <div className="px-3 md:px-5 relative z-10">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide ">
            <div className="flex">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
     </div>   
    );
};

export default MovieList;

