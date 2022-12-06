const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function start() {
const prompt = `Diga: Olá mundo!`

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.7,
});

const response_text  = response.data.choices[0].text;
console.log(response_text);


};



start();
