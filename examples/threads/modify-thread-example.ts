import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const updatedThread = await openai.beta.threads.update("thread_oR2RtBltL9q7jQUlw1m2y7Fx", {
    metadata: { modified: "true", user: "abc123" }
  });

  console.log(updatedThread);
}

main();
