import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.create("thread_loVB9IhqItKDULzckd4OcvEx", { assistant_id: "asst_6AF9EmaNY8lraxye7Sx5LxJC" });

  console.log(run);
}

main();
