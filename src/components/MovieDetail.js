import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
            API_OPTIONS
        )
            .then((res) => res.json())
            .then((data) => setMovie(data));
    }, [id]);

    if (!movie) return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <p className="text-white text-xl">Loading...</p>
        </div>
    );

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">

            {/* Backdrop with gradient overlay */}
            <div className="relative h-[40vh] md:h-[55vh]">
                <img
                    className="w-full h-full object-cover"
                    src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                    alt={movie.title}
                />
                {/* dark gradient so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                {/* Back button on top of backdrop */}
                <button
                    onClick={() => navigate("/browse")}
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/50 transition"
                >
                    ← Back
                </button>

                {/* Title on top of backdrop */}
                <div className="absolute -bottom-10 left-4 md:left-56 lg:left-56">
                <h1 className="hidden md:block pl-6 md:text-3xl lg:text-5xl font-bold drop-shadow-lg">{movie.title}</h1>
                </div>
            </div>

            {/* Content below backdrop */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-12 pt-4 md:pt-16 pb-6">

                {/* Poster */}
                <img
                    className="w-28 md:w-44 rounded-xl object-cover object-top shadow-2xl -mt-16 md:-mt-24 z-10 border-2 border-gray-700 flex-shrink-0"
                    src={IMG_CDN_URL + movie.poster_path}
                    alt={movie.title}
                />

                {/* Details */}
                <div className="flex flex-col gap-2 md:gap-3 md:mt-2">
                    {/* title only visible on mobile */}
                    <h1 className="block md:hidden text-xl fnot-bold">{movie.title}</h1>
                    <p className="text-gray-300 text-xs md:text-base max-w-2xl">{movie.overview}</p>
                    <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm mt-1">
                        <span>⭐ <span className="text-yellow-400 font-semibold">{movie.vote_average?.toFixed(1)}</span></span>
                        <span>🎬 {movie.release_date}</span>
                        <span>⏱ {movie.runtime} mins</span>
                        <span>🌍 {movie.original_language?.toUpperCase()}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-1">
                        {movie.genres?.map((g) => (
                            <span key={g.id} className="bg-red-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                                {g.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;