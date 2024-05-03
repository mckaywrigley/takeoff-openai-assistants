import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const response = await openai.beta.assistants.del("asst_9cjHRr99eAI8XKGoi4faHO79");

  console.log(response);
}

main();
