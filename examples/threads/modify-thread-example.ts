import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const updatedThread = await openai.beta.threads.update("thread_MGxvQygylIcDd4tlpZ4DifHu", {
    metadata: { modified: "true", user: "abc123" }
  });

  console.log(updatedThread);
}

main();
