import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const runStep = await openai.beta.threads.runs.steps.list("thread_abc123", "run_abc123");
  console.log(runStep);
}

main();
