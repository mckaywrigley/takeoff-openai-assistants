import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myAssistant = await openai.beta.assistants.create({
    model: "gpt-4-turbo",
    name: "Math Tutor",
    description: "A personal math tutor with access to Python code interpreter.",
    instructions: "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
    tools: [{ type: "code_interpreter" }],
    tool_resources: null,
    metadata: {},
    temperature: 1.0,
    top_p: 1.0,
    response_format: "auto"
  });

  console.log(myAssistant);
}

main();
