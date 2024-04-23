import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myUpdatedAssistant = await openai.beta.assistants.update("asst_tPjSEL3QVAEFz7F4k158LQGf", {
    model: "gpt-4-turbo",
    name: "HR Helper",
    description: "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
    instructions: "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
    tools: [{ type: "file_search" }],
    tool_resources: {},
    metadata: {},
    temperature: 0.7,
    top_p: 1,
    response_format: { type: "json_object" }
  });

  console.log(myUpdatedAssistant);
}

main();
