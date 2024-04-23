import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myAssistants = await openai.beta.assistants.list({
    limit: 20,
    order: "desc"
  });

  console.log(myAssistants.data);
}

main();
