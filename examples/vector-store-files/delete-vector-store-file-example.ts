import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const deletedVectorStoreFile = await openai.beta.vectorStores.files.del("vs_abc123", "file-abc123");

  console.log(deletedVectorStoreFile);
}

main();
