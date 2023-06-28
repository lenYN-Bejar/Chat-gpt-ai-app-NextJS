import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

console.log(process.env.OPENAI_API_KEY, 'apikey')

const openai = new OpenAIApi(config)

export async function POST(request) {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            {
                role:'system',
                content: 'Comportate como si fueses mi abuela regañándome por no ir a la universidad a estudiar programacion'
            },
            {
                role: 'user',
                content: 'Abuela no me encuentro muy bien, no puedo ir a la universidad a estudiar programacion'
            }
        ],
        max_tokens: 500,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
}

