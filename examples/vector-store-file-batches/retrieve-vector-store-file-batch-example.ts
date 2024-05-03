import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFileBatch = await openai.beta.vectorStores.fileBatches.retrieve("vs_p3bPEVRhz16PbSG0uo9R0i97", "vsfb_e7be0809e7d44abc99b76ab956a10992");

  console.log(vectorStoreFileBatch);
}

main();
