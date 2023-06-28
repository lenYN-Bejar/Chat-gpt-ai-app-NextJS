'use client'

import { useChat } from 'ai/react'

export function Chat () {

    const { messages, input, handleInputChange, handleSubmit} = useChat()

    return(
        <div className='flex flex-col max-w-xl px-8 mx-auto'>
            {messages.map(message => {
                const isAbuelita = message.role !== 'user'
                return (
                    <div key={message.id}>
                        <p>
                            {isAbuelita ? '👵 ' : '👨‍💻 '}
                            <span className={`pl-4 ${isAbuelita ? 'text-yellow-500': 'text-blue-300'}`}>{message.content}</span>
                        </p>
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <input className='fixed w-full bottom-4 border border-gray-400 max-w-xl mb-8 shadow-2xl px-4 py-2 m-auto rounded-full' type='text' name='content' value={input} onChange={handleInputChange}/>
            </form>
        </div>
    )
} 