import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFiles = await openai.beta.vectorStores.fileBatches.listFiles("vs_abc123", "vsfb_abc123");

  console.log(vectorStoreFiles);
}

main();
