import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const threadMessages = await openai.beta.threads.messages.create("thread_vmiP1Kpuu2bj9VAw9LmzyIsJ", { role: "user", content: "How does gravity work?" });

  console.log(threadMessages);
}

main();
