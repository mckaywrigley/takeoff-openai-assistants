import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const threadMessages = await openai.beta.threads.messages.create("thread_abc123", { role: "user", content: "How does AI work? Explain it in simple terms." });

  console.log(threadMessages);
}

main();
