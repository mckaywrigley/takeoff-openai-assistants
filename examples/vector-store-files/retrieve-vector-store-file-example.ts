import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const vectorStoreFile = await openai.beta.vectorStores.files.retrieve("vs_p3bPEVRhz16PbSG0uo9R0i97", "file-np34t0FdpwVany4SrAkWqaSK");

  console.log(vectorStoreFile);
}

main();
