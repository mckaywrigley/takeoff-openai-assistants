# Create Thread

`POST` https://api.openai.com/v1/threads

Create a thread.

## Resources

- [Docs](https://platform.openai.com/docs/assistants/overview/step-2-create-a-thread)
- [API Reference](https://platform.openai.com/docs/api-reference/threads/createThread)

## Request Body

**messages**: `array`

- Optional. A list of messages to start the thread with.

**tool_resources**: `object` or `null`

- Optional. A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

**metadata**: `map`

- Optional. Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.

## Returns

A thread object.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const emptyThread = await openai.beta.threads.create();

  console.log(emptyThread);
}

main();
```
