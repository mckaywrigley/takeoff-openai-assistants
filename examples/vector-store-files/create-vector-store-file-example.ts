import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myVectorStoreFile = await openai.beta.vectorStores.files.create("vs_abc123", {
    file_id: "file-abc123"
  });

  console.log(myVectorStoreFile);
}

main();
