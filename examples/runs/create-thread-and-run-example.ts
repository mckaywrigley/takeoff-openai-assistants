import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.createAndRun({
    assistant_id: "asst_VY3BYLpzpSI1pidjxSqfN6ta",
    thread: {
      messages: [{ role: "user", content: "What is the weather in Los Angeles?" }]
    }
  });

  console.log(run);
}

main();
