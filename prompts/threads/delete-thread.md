# Delete Thread

`DELETE` https://api.openai.com/v1/threads/{thread_id}

Delete a thread.

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/threads/deleteThread)

## Path Parameters

**thread_id**: `string`

- Required. The ID of the thread to retrieve.

## Returns

Deletion status.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const response = await openai.beta.threads.del("thread_abc123");

  console.log(response);
}
main();
```
