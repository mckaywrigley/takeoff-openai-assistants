# OpenAI Assistants Playground

Use your assistants via the OpenAI Playground.

- [Assistants](https://platform.openai.com/assistants)
- [Playground](https://platform.openai.com/playground/assistants)
- [Vector Stores](https://platform.openai.com/storage/vector_stores)
- [Files](https://platform.openai.com/storage/files)

## Example Function

Get Weather

```json
{
  "name": "get_weather",
  "description": "Determine weather in my location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "The city and state e.g. San Francisco, CA"
      },
      "unit": {
        "type": "string",
        "enum": ["c", "f"]
      }
    },
    "required": ["location"]
  }
}
```
