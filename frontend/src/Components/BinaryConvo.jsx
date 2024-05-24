import React from 'react'
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '../index.css';



const BinaryConvo = () => {
    const [messages, setMessages] = useState([
        {
          message: "What is Binary Search? Binary search is a way to find a specific item in a sorted list quickly. Instead of looking through each item one by one, it divides the list in half to see if the item is in the first half or the second half. It keeps doing this until it finds the item or determines that the item is not in the list.",
          sentTime: "just now",
          sender: "ChatGPT",
          direction: 'incoming'
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) { 
        // TODO: Send API call here
          setMessages([...chatMessages, {
            message: 'EXAMPLE RESPONSE', // TODO: Replace this w/ message from API response
            direction: 'incoming',
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        };
      
    return (
        <div className='mt-16'>

            <h1 className='my-4 pt-2 mx-3 text-3xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"'>
                The Binary Search Algorithm
            </h1>

            <div className='grid grid-cols-5' style={{ height: 'calc(100vh - 9rem)' }}>
                <MainContainer className='rounded-lg col-span-5 md:col-start-2 md:col-span-3'>
                    <ChatContainer >
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                            >
                            {messages.map((message, i) => {
                                return (
                                    <>
                                        <p className={message.sender === 'user' ? 'text-right mt-2': 'text-left mt-2'} >{message.sender}</p>
                                        <Message className='w-3/5 text-left' key={i} model={message} />
                                    </>
                                )
                            })}
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>

        </div>
    )
}

export default BinaryConvo