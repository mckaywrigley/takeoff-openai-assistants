import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const runStep = await openai.beta.threads.runs.steps.list("thread_0v7lp0mG1SCTlXNVX0crlQn3", "run_VT57iDHN2vojsPN1Ky0Nsfrp");

  console.log(runStep.data);
}

main();
