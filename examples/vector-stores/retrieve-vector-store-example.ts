import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStore = await openai.beta.vectorStores.retrieve("vs_p3bPEVRhz16PbSG0uo9R0i97");

  console.log(vectorStore);
}

main();
