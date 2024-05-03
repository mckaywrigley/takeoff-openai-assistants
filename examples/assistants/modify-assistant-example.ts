import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myUpdatedAssistant = await openai.beta.assistants.update("asst_AMF23gTDkoNOl32Sfo8WGtTP", {
    model: "gpt-4-turbo",
    name: "HR Helper",
    description: "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
    instructions: "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
    tools: [{ type: "file_search" }],
    tool_resources: {},
    metadata: {},
    temperature: 0.7,
    top_p: 1,
    response_format: "auto"
  });

  console.log(myUpdatedAssistant);
}

main();
