import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myVectorStoreFileBatch = await openai.beta.vectorStores.fileBatches.create("vs_abc123", {
    file_ids: ["file-abc123", "file-abc456"]
  });

  console.log(myVectorStoreFileBatch);
}

main();
