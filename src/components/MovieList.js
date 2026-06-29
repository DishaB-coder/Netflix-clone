import { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);

    if (!movies) return null;

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 600;
        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    const handleScroll = () => {
        setShowLeft(scrollRef.current.scrollLeft > 0);
    };

    return (
        <div className="px-3 md:px-5 relative z-10 group">
            <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

            <div className="relative">
                {/* Left Arrow */}
                {showLeft && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-0 h-full z-20 w-10 md:w-14 flex items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white text-2xl md:text-4xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                    >
                        &#8249;
                    </button>
                )}

                {/* Movie Row */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
                >
                    <div className="flex">
                        {movies?.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-0 h-full z-20 w-10 md:w-14 flex items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white text-2xl md:text-4xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default MovieList;

