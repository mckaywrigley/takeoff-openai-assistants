import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myThread = await openai.beta.threads.retrieve("thread_0v7lp0mG1SCTlXNVX0crlQn3");

  console.log(myThread);
}

main();
