import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const deletedVectorStoreFileBatch = await openai.beta.vectorStores.fileBatches.cancel("vs_abc123", "vsfb_abc123");

  console.log(deletedVectorStoreFileBatch);
}

main();
