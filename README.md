# Takeoff: OpenAI Assistants

In this module we learn how to make AI agents with the OpenAI Assistants API.

## Resources

- [Takeoff](https://JoinTakeoff.com)
- [OpenAI Docs](https://platform.openai.com/docs/assistants/overview)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference/assistants)

## Prompts

We recommend using [Cursor](https://cursor.sh/) to write code.

Use the files in the `prompts` folder to help you in this module.

## Prerequisites

You will need an OpenAI API Key.

Get one [here](https://platform.openai.com/api-keys).

Copy the `.env.example` file to `.env`.

```bash
cp .env.example .env
```

In `.env`, fill in the API key.

```bash
OPENAI_API_KEY=your-openai-api-key
```

## Install Packages

```bash
npm i
```

## Structure

The example code is in the `examples` folder.

Your code is in the `me` folder.

## Run Code

Example: Run the `assistants-create-example` file.

For the example code, run the following command:

```bash
npm run assistants-create-example
```

For your code, run the following command:

```bash
npm run assistants-create
```

This pattern is the same for all examples.

See `package.json` for the full list of scripts.

## OpenAI Assistants Playground'

You can use your assistants via the [OpenAI Assistants Playground](https://platform.openai.com/playground?mode=assistant).
