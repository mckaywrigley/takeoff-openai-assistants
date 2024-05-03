import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const response = await openai.beta.threads.del("thread_MGxvQygylIcDd4tlpZ4DifHu");

  console.log(response);
}

main();
