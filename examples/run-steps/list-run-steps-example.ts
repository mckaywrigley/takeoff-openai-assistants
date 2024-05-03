import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const runStep = await openai.beta.threads.runs.steps.list("thread_JWtgQ4GySNd8tzb49DyyXiv1", "run_RSoj5rsn5q6muo6MJCMCB9j7");

  console.log(runStep.data);
}

main();
