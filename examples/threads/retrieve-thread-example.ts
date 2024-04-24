import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myThread = await openai.beta.threads.retrieve("thread_oR2RtBltL9q7jQUlw1m2y7Fx");

  console.log(myThread);
}

main();
