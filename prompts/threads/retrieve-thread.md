# Retrieve Thread

`GET` https://api.openai.com/v1/threads/{thread_id}

Retrieves a thread.

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/threads/getThread)

## Path Parameters

**thread_id**: `string`

- Required. The ID of the thread to retrieve.

## Returns

The thread object matching the specified ID.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const myThread = await openai.beta.threads.retrieve("thread_abc123");

  console.log(myThread);
}

main();
```
