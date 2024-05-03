import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const deletedVectorStoreFile = await openai.beta.vectorStores.files.del("vs_p3bPEVRhz16PbSG0uo9R0i97", "file-np34t0FdpwVany4SrAkWqaSK");

  console.log(deletedVectorStoreFile);
}

main();
