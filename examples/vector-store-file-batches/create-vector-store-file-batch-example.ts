import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myVectorStoreFileBatch = await openai.beta.vectorStores.fileBatches.create("vs_p3bPEVRhz16PbSG0uo9R0i97", {
    file_ids: ["file-rGwbqcofesBGmS728Spdd4mJ"]
  });

  console.log(myVectorStoreFileBatch);
}

main();
