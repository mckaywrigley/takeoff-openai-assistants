# Retrieve Assistant

`GET` https://api.openai.com/v1/assistants/{assistant_id}

Retrieves an assistant.

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/assistants/getAssistant)

## Path Parameters

**assistant_id**: `string`

- The ID of the assistant to retrieve.

## Returns

The assistant object matching the specified ID.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const myAssistant = await openai.beta.assistants.retrieve("asst_abc123");

  console.log(myAssistant);
}

main();
```
