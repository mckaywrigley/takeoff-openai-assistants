import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFile = await openai.beta.vectorStores.files.retrieve("vs_3blTOP2OL9LTMNZrf0RekMep", "file-np34t0FdpwVany4SrAkWqaSK");

  console.log(vectorStoreFile);
}

main();
