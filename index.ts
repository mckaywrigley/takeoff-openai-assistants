import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function poemGenerator() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "write a short about about the user's topic" },
      { role: "user", content: "pizza" }
    ]
  });

  console.log(response.choices[0].message.content);
}

poemGenerator();

// Pizza is a beloved dish enjoyed by people all around the world. This flavorful and versatile food has its roots in Italy, where it was originally a simple dish made with flatbread, tomatoes, and cheese. Over the years, pizza has evolved into a culinary phenomenon, with endless variations in toppings and styles.

// Whether you prefer a classic Margherita pizza with mozzarella, tomato sauce, and basil, or a loaded meat-lover's pizza with pepperoni, sausage, and bacon, there is a pizza for every taste preference. From thin and crispy crusts to thick and doughy ones, there are endless options to satisfy your pizza craving.

// Pizza is not just a delicious meal, but also a social experience, often shared with friends and family. It brings people together over a shared love of cheesy, saucy goodness. Whether you order in from your favorite pizzeria or make it homemade, pizza will always be a go-to comfort food that never disappoints.
