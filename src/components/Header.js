import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
            navigate("/error");
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="absolute w-screen px-3 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img
                className="w-24 md:w-44"
                src={LOGO}
                alt="logo"
            />
            {user && (
                <div className="flex items-center gap-1 md:gap-2 overflow-hidden">
                    {showGptSearch && (
                        <select
                            className="p-1 bg-black text-white text-xs md:text-sm"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map(lang => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <button
                        className="py-1 px-2 md:px-3 bg-red-700 text-white rounded-lg text-xs md:text-sm"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>
                    <img className="w-7 h-7 md:w-10 md:h-10 rounded" alt="usericon" src={user?.photoURL} />
                    <button onClick={handleSignOut} className="font-bold text-white text-xs md:text-sm">
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;