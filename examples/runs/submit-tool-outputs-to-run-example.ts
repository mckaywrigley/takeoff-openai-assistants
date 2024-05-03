import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.submitToolOutputs("thread_JWtgQ4GySNd8tzb49DyyXiv1", "run_RSoj5rsn5q6muo6MJCMCB9j7", {
    tool_outputs: [
      {
        tool_call_id: "call_QG6O21ixrJfnZt3Aj32sbI0d",
        output: "70 degrees and sunny."
      }
    ]
  });

  console.log(run);
}

main();
