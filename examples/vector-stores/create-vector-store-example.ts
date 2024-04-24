import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStore = await openai.beta.vectorStores.create({
    name: "Support FAQ"
  });

  console.log(vectorStore);
}

main();
