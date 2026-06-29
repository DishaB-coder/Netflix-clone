import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_AI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(GOOGLE_AI_KEY);

export default genAI;

