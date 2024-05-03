import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const message = await openai.beta.threads.messages.retrieve("thread_JWtgQ4GySNd8tzb49DyyXiv1", "msg_G39q6U8s4ne2LyaO0sEXCB2R");

  console.log(message);
  console.log(message.content[0]);
}

main();
