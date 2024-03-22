require ('dotenv').config();

const OpenAI = require ('openai').OpenAI;
const openai = new OpenAI();

async function main () {
    const response = await openai.chat.completions.create ({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'system',
                content: 'Sat this is a test'
            },
        ],
    })
    console.log(response.choices[0].message.content);
}

main()

