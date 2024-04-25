import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStores = await openai.beta.vectorStores.list();

  console.log(vectorStores.data);
}

main();
