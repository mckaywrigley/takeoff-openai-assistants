import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.create("thread_vmiP1Kpuu2bj9VAw9LmzyIsJ", { assistant_id: "asst_L2Xr97LpPlZX0ZSJTGzXWlva" });

  console.log(run);
}

main();
