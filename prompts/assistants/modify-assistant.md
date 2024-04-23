# Modify Assistant

`POST` https://api.openai.com/v1/assistants/{assistant_id}

Modifies an assistant.

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/assistants/modifyAssistant)

## Path Parameters

**assistant_id**: `string` (required)

- The ID of the assistant to modify.

## Request Body

**model**: `string` (Optional)

- ID of the model to use. You can use the List models API to see all of your available models, or see our Model overview for descriptions of them.

**name**: `string or null` (Optional)

- The name of the assistant. The maximum length is 256 characters.

**description**: `string or null` (Optional)

- The description of the assistant. The maximum length is 512 characters.

**instructions**: `string or null` (Optional)

- The system instructions that the assistant uses. The maximum length is 256,000 characters.

**tools**: `array` (Optional, Defaults to [])

- A list of tools enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types code_interpreter, file_search, or function.

**tool_resources**: `object or null` (Optional)

- A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

**metadata**: `map` (Optional)

- Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.

**temperature**: `number or null` (Optional, Defaults to 1)

- What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.

**top_p**: `number or null` (Optional, Defaults to 1)

- An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.

**response_format**: `string or object` (Optional)

- Specifies the format that the model must output. Compatible with GPT-4 Turbo and all GPT-3.5 Turbo models since gpt-3.5-turbo-1106. Setting to { "type": "json_object" } enables JSON mode, which guarantees the message the model generates is valid JSON. Important: when using JSON mode, you must also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if finish_reason="length", which indicates the generation exceeded max_tokens or the conversation exceeded the max context length.

## Returns

The modified assistant object.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const myUpdatedAssistant = await openai.beta.assistants.update("asst_abc123", {
    instructions: "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
    name: "HR Helper",
    tools: [{ type: "file_search" }],
    model: "gpt-4-turbo"
  });

  console.log(myUpdatedAssistant);
}

main();
```
