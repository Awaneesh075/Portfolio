'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I can answer questions about Awaneesh&apos;s portfolio. Ask me anything!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioInfo = {
    name: 'Awaneesh Chaturvedi',
    title: 'Software Developer',
    email: 'chaturvediabhshek9554@gmail.com',
    education: 'B.Tech in Computer Science and Engineering from MPGI, Kanpur',
    skills: {
      languages: 'C++, C, JavaScript, TypeScript, Python',
      frontend: 'React.js, Next.js, Tailwind CSS, HTML, CSS',
      backend: 'Node.js, Express.js, REST APIs',
      databases: 'MongoDB, MySQL',
      tools: 'Git, GitHub, Docker, Postman, GCP'
    },
    experience: 'Software/Frontend Developer Intern at Wherehouse.io',
    projects: [
      'Smart Gate Control System',
      'Inventory Management System',
      'Weather Web Application',
      'Fake News Detection System'
    ],
    leetcode: '200+ problems solved',
    certifications: [
      'Problem Solving Through C Programming - NPTEL',
      'Data Structures and Algorithm - NPTEL'
    ]
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return `Hello! I'm the portfolio assistant. I can help you learn about Awaneesh Chaturvedi. What would you like to know?`;
    }

    // Name
    if (lowerMessage.includes('name') && !lowerMessage.includes('email')) {
      return `The portfolio owner's name is ${portfolioInfo.name}, a ${portfolioInfo.title}.`;
    }

    // Email
    if (lowerMessage.includes('email') || lowerMessage.includes('contact')) {
      return `You can reach out via email at ${portfolioInfo.email}`;
    }

    // Skills
    if (lowerMessage.includes('skill')) {
      return `Here are Awaneesh's main skills:\n\n📌 Languages: ${portfolioInfo.skills.languages}\n\n📌 Frontend: ${portfolioInfo.skills.frontend}\n\n📌 Backend: ${portfolioInfo.skills.backend}\n\n📌 Databases: ${portfolioInfo.skills.databases}\n\n📌 Tools: ${portfolioInfo.skills.tools}`;
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('intern')) {
      return `Awaneesh has experience as a ${portfolioInfo.experience} (Jul 2025 – Jan 2026), working on React.js and TypeScript projects.`;
    }

    // Education
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('college')) {
      return `Awaneesh is pursuing a ${portfolioInfo.education} (2022-2026).`;
    }

    // Projects
    if (lowerMessage.includes('project')) {
      return `Awaneesh has worked on these projects:\n\n1. Smart Gate Control System - AI-powered smart entry system\n2. Inventory Management System - Stock tracking system\n3. Weather Web Application - Real-time weather app\n4. Fake News Detection System - ML-based classification`;
    }

    // LeetCode
    if (lowerMessage.includes('leetcode') || lowerMessage.includes('problem')) {
      return `Awaneesh has solved ${portfolioInfo.leetcode} on LeetCode, showcasing strong problem-solving skills.`;
    }

    // Certifications
    if (lowerMessage.includes('certification')) {
      return `Awaneesh holds these certifications:\n\n1. Problem Solving Through C Programming - NPTEL\n2. Data Structures and Algorithm - NPTEL`;
    }

    // Default response
    return `I can answer questions about Awaneesh's skills, experience, projects, education, and more. Feel free to ask!`;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setLoading(false);
    }, 500);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center cursor-pointer"
        aria-label="Open chatbot"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8l-2 2v-2H4V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-300 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-xl flex justify-between items-center shrink-0">
            <h3 className="font-bold text-lg">Portfolio Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded p-1 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  } whitespace-pre-wrap text-sm break-words`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2 bg-white shrink-0">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-sm transition"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || loading}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded px-4 py-2 hover:shadow-lg disabled:opacity-50 transition font-semibold cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
