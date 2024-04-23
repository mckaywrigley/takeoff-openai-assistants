# Delete Assistant

`DELETE` https://api.openai.com/v1/assistants/{assistant_id}

Delete an assistant.

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/assistants/deleteAssistant)

## Path Parameters

**assistant_id**: `string` (required)

- The ID of the assistant to delete.

## Returns

Deletion status.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const response = await openai.beta.assistants.del("asst_abc123");

  console.log(response);
}
main();
```
