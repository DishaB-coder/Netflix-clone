import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-28 md:w-44 pr-2 md:pr-4 rounded-xl overflow-hidden">
            <img className="rounded-xl h-40 md:h-64 object-cover w-full" alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
    );
};

export default MovieCard;