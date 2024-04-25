import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.update("thread_0v7lp0mG1SCTlXNVX0crlQn3", "run_VT57iDHN2vojsPN1Ky0Nsfrp", {
    metadata: {
      user_id: "user_abc123"
    }
  });

  console.log(run);
}

main();
