import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const response = await openai.beta.assistants.del("asst_U4NGfVhaElGaO5wGBr29OWe0");

  console.log(response);
}

main();
