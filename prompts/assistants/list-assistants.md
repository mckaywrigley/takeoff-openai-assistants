# List Assistants

`GET` https://api.openai.com/v1/assistants

Returns a list of assistants.

## Resources

- [API Reference](https://platform.openai.com/docs/api-reference/assistants/listAssistants)

## Query Parameters

**limit**: `integer`

- A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.

**order**: `string`

- Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.

**after**: `string`

- A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.

**before**: `string`

- A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.

## Returns

A list of assistant objects.

## Example

```js
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const myAssistants = await openai.beta.assistants.list({
    order: "desc",
    limit: "20"
  });

  console.log(myAssistants.data);
}

main();
```
