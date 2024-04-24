import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.update("thread_abc123", "run_abc123", {
    metadata: {
      user_id: "user_abc123"
    }
  });

  console.log(run);
}

main();
