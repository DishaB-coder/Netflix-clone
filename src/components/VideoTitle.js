import { useNavigate } from "react-router-dom";

const VideoTitle = ({title, overview, id}) => {
    const navigate = useNavigate();

    return (
        <div className="w-screen aspect-video pt-[35%] md:pt-[15%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-lg md:text-4xl font-bold w-3/4 md:w-full">{title}</h1>
            <p className="py-2 md:py-5 text-xs md:text-sm w-1/2 md:w-1/3 hidden md:block">{overview}</p>
            <div className="flex gap-2 mt-2 md:mt-0">
                <button className="bg-white text-black flex flex-row p-1 md:p-2 px-4 md:px-10 rounded-lg hover:bg-opacity-70 text-xs md:text-base">
                    <svg className="fill-black" viewBox="0 0 24 24" width="16" height="20">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                </button>
                <button
                onClick={() => navigate("/movie/" +id)}
                className="bg-gray-500 text-white p-1 md:p-2 px-4 md:px-10 bg-opacity-50 rounded-lg text-xs md:text-base">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;