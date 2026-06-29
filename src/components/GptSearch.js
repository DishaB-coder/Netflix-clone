import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
    return (
        <div>
        <div className="fixed -z-10">
        <img src={BG_URL}
        alt="backgroundImage"
        className="w-screen h-screen object-cover" />
        </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
};

export default GPTSearch;