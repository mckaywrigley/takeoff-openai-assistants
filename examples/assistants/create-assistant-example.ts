import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const myAssistant = await openai.beta.assistants.create({
    model: "gpt-4-turbo",
    name: "Feature Ideas Assistant",
    description: "",
    instructions: "You generate ideas for features to add to a product.",
    tools: [{ type: "file_search" }],
    tool_resources: { file_search: { vector_store_ids: ["vs_p3bPEVRhz16PbSG0uo9R0i97"] } },
    metadata: {},
    temperature: 1.0,
    top_p: 1.0,
    response_format: "auto"
  });

  console.log(myAssistant);
}

main();
