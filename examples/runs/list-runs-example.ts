import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const runs = await openai.beta.threads.runs.list("thread_0v7lp0mG1SCTlXNVX0crlQn3");

  console.log(runs.data);
}

main();
