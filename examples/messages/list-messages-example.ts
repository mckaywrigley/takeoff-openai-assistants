import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const threadMessages = await openai.beta.threads.messages.list("thread_0v7lp0mG1SCTlXNVX0crlQn3");

  console.log(threadMessages.data);

  console.log(threadMessages.data[0].content[0]);
}

main();
