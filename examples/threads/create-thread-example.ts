import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const emptyThread = await openai.beta.threads.create();

  console.log(emptyThread);
}

main();
