import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.create("thread_abc123", { assistant_id: "asst_abc123" });

  console.log(run);
}

main();
