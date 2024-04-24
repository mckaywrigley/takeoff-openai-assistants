import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFile = await openai.beta.vectorStores.files.retrieve("vs_abc123", "file-abc123");

  console.log(vectorStoreFile);
}

main();
