import React from 'react'
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '../index.css';



export const BinaryConvo = () => {
    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm ChatGPT! Ask me anything!",
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
    
      async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        
          setMessages([...chatMessages, {
            message: 'EXAMPLE RESPONSE',
            direction: 'incoming',
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        };
      
    
    return (
        <div>

            <h1 className='my-4 mx-3 text-3xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"'>Learn The Binary Search Algorithm</h1>

            <div className='grid grid-cols-5' style={{ height: 'calc(100vh - 5rem)' }}>
                <MainContainer className='col-span-5 md:col-start-2 md:col-span-3'>
                    <ChatContainer >
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                            >
                            {messages.map((message, i) => {
                                console.log(message);
                                return <Message key={i} model={message} />;
                            })}
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>

        </div>
    )
}
