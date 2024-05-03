import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFiles = await openai.beta.vectorStores.files.list("vs_p3bPEVRhz16PbSG0uo9R0i97");

  console.log(vectorStoreFiles.data);
}

main();
