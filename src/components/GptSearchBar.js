
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { addGptMovieResult } from "../utils/gptSlice";



const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    //search movie in TMDB 
    const searchMovieTMDB = async (movie) => {
        const data = await fetch ("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        return json.results;
    };

 const handleGptSearchClick = async() => {
    try {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmal, Dhurandar";

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + process.env.REACT_APP_GOOGLE_AI_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemma-4-31b-it:free",
                messages: [{ role: "user", content: gptQuery }]
            })
        });

        const data = await response.json();

        if (!data.choices || data.choices.length === 0) {
            console.error("No results from OpenRouter");
            return;
        }

        const gptMovies = data.choices[0].message.content.split(",").map(m => m.trim());
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

    } catch (error) {
        console.error("GPT Search failed:", error);
    }
};


    return (
    <div className="pt-[55%] md:pt-[10%] flex justify-center px-4 md:px-0">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 md:m-4 col-span-8 rounded-lg bg-red-100 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-2 md:m-4 py-2 px-2 bg-red-700 text-white rounded-lg col-span-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

