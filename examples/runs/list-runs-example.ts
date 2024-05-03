import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const runs = await openai.beta.threads.runs.list("thread_vmiP1Kpuu2bj9VAw9LmzyIsJ");

  console.log(runs.data);
}

main();
