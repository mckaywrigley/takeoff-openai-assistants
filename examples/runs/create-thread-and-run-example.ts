import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.createAndRun({
    assistant_id: "asst_6AF9EmaNY8lraxye7Sx5LxJC",
    thread: {
      messages: [{ role: "user", content: "Explain deep learning to a 5 year old." }]
    }
  });

  console.log(run);
}

main();
