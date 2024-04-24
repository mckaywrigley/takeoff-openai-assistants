import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const message = await openai.beta.threads.messages.update("thread_abc123", "msg_abc123", {
    metadata: {
      modified: "true",
      user: "abc123"
    }
  });

  console.log(message);
}

main();
