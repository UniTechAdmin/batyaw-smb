import { ChatOpenAI } from "@langchain/openai";

export const run = async () => {
  const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0,
  });
  const res = await model.invoke("Hello, how are you?");
  console.log({ res });
};

run();
