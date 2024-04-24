import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const message = await openai.beta.threads.messages.retrieve("thread_abc123", "msg_abc123");

  console.log(message);
}

main();
