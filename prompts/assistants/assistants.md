# Assistants

Build assistants that can call models and use tools to perform tasks.

## Resources

- [Docs](https://platform.openai.com/docs/assistants)

- [API Reference](https://platform.openai.com/docs/api-reference/assistants)

- [Playground](https://platform.openai.com/playground/assistants)

## Assistant Object

Represents an assistant that can call the model and use tools.

```json
{
  "id": "asst_abc123",
  "object": "assistant",
  "created_at": 1698984975,
  "name": "Math Tutor",
  "description": null,
  "model": "gpt-4-turbo",
  "instructions": "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
  "tools": [
    {
      "type": "code_interpreter"
    }
  ],
  "metadata": {},
  "top_p": 1.0,
  "temperature": 1.0,
  "response_format": "auto"
}
```
