import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myAssistant = await openai.beta.assistants.retrieve("asst_VY3BYLpzpSI1pidjxSqfN6ta");

  console.log(myAssistant);
}

main();
