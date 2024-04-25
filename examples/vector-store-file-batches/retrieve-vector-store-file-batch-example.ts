import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFileBatch = await openai.beta.vectorStores.fileBatches.retrieve("vs_3blTOP2OL9LTMNZrf0RekMep", "vsfb_b12fc3d7cad34fbaa52bfa96854a51d6");

  console.log(vectorStoreFileBatch);
}

main();
