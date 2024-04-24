import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFileBatch = await openai.beta.vectorStores.fileBatches.retrieve("vs_abc123", "vsfb_abc123");

  console.log(vectorStoreFileBatch);
}

main();
