import { OpenAI } from "langchain/llms/openai";

export const run = async () => {
  const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const res = await model.call("What is the meaning of life?");
  console.log({ res });
};

run();
