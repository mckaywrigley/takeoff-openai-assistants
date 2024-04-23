# Create Assistant

`POST` https://api.openai.com/v1/assistants

Create an assistant with a model and instructions.

## Resources

- [Docs](https://platform.openai.com/docs/assistants/overview/step-1-create-an-assistant)
- [API Reference](https://platform.openai.com/docs/api-reference/assistants/createAssistant)

## Request Body

**model**: `string` (required)

- ID of the model to use. You can use the List models API to see all of your available models, or see our Model overview for descriptions of them.

**name**: `string` or `null`

- The name of the assistant. The maximum length is 256 characters.

**description**: `string` or `null`

- The description of the assistant. The maximum length is 512 characters.

**instructions**: `string` or `null`

- The system instructions that the assistant uses. The maximum length is 256,000 characters.

**tools**: `array`

- A list of tools enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types code_interpreter, file_search, or function.

**tool_resources**: `object` or `null`

- A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

**metadata**: `map`

- Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.

**temperature**: `number` or `null`

- What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.

**top_p**: `number` or `null`

- An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.

**response_format**: `string` or `object`

- Specifies the format that the model must output. Compatible with GPT-4 Turbo and all GPT-3.5 Turbo models since gpt-3.5-turbo-1106.
- Setting to { "type": "json_object" } enables JSON mode, which guarantees the message the model generates is valid JSON.
- Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.

## Returns

An assistant object.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const myAssistant = await openai.beta.assistants.create({
    instructions: "You are an HR bot, and you have access to files to answer employee questions about company policies.",
    name: "HR Helper",
    tools: [{ type: "file_search" }],
    tool_resources: {
      file_search: {
        vector_store_ids: ["vs_123"]
      }
    },
    model: "gpt-4-turbo"
  });

  console.log(myAssistant);
}

main();
```
