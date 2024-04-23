# Modify Thread

`POST` https://api.openai.com/v1/threads/{thread_id}

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/threads/modifyThreadhttps://platform.openai.com/docs/api-reference/threads/getThread)

## Returns

The modified thread object matching the specified ID.

## Path Parameters

**thread_id**: `string`

- Required. The ID of the thread to modify. Only the metadata can be modified.

## Request Body

**tool_resources**: `object` or `null`

- Optional. A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

**metadata**: `map`

- Optional. Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maximum of 512 characters long.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const updatedThread = await openai.beta.threads.update("thread_abc123", {
    metadata: { modified: "true", user: "abc123" }
  });

  console.log(updatedThread);
}

main();
```
