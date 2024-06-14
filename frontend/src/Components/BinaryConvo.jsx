import React from 'react'
import { useState, useEffect, useContext } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { UserContext } from './UserContext';
import axios from 'axios';
import '../index.css';



const BinaryConvo = () => {
    const { user } = useContext(UserContext)
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

      // useEffect(() => {
      //   const fetch_conversation_history = async () => {
      //     try {
      //       const response = await axios.get('http://localhost:8000/binaryconvohistory/', user.user_id);
      //       console.log('convo history response', response)
      //       setMessages([
      //         ...messages, 
      //         {message:response.data.message ? response.data.message : response.data.gpt_response, 
      //           sentTime: "just now",
      //           sender: response.data.message ?  "user" : "ChatGPT",
      //           direction: response.data.message ?' outgoing' : 'incoming'
      //       }])
      //     } catch (error) {
      //       console.log('Error fetching conversation',error);
      //     }
      //   }
      //   fetch_conversation_history();
      // }, [])

      useEffect(() => {
        const fetchConversationHistory = async () => {
            try {
                const response = await axios.get('http://localhost:8000/binaryconvohistory/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                        // console.log('authorization')
                    },
                    params: {
                        user_id: user.user_id
                    }
                });
                console.log('convo history response', response);

                const convoHistory = [];
                // todo: delete convo history and test to see if messages duplicate
                response.data.forEach(convo => {
                    // Add outgoing message
                    convoHistory.push({
                        message: convo.message,
                        sentTime: "just now",
                        sender: "user", //todo: update this to show the users name
                        direction: 'outgoing'
                    });

                    // Add incoming response
                    convoHistory.push({
                        message: convo.response,
                        sentTime: "just now",
                        sender: "ChatGPT",
                        direction: 'incoming'
                    });
                });

                setMessages(prevMessages => [...prevMessages, ...convoHistory]);
            } catch (error) {
                console.log('Error fetching conversation', error);
            }
        };

        fetchConversationHistory();
    }, [user]);
    
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