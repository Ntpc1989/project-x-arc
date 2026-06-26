'use client';

import { useState } from 'react';

export default function ProjectXArc() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello, I'm X-1 — Project X's Autonomous Agent on Arc Network. What do you want to execute today?" }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // User message add
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setIsThinking(true);

    // Fake AI response (baad mein real AI connect kar sakte hain)
    setTimeout(() => {
      const responses = [
        "Executing on Arc Native... Transaction initiated.",
        "Capital flow optimized via StableFX + Arc.",
        "Agent X-1 has deployed the strategy successfully.",
        "Monitoring on-chain activity... 98% confidence."
      ];
      
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top Navbar */}
      <nav className="border-b border-white/10 bg-black/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center font-bold">X</div>
            <h1 className="text-2xl font-bold tracking-tighter">Project X <span className="text-blue-500">@arc</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
              Arc Testnet Connected
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">X-1 Autonomous Agent</h2>
          <p className="text-gray-400 text-xl">Intent → Execution on Arc Network</p>
        </div>

        {/* Chat Area */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-3xl h-[520px] flex flex-col overflow-hidden">
          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-zinc-800 text-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                X-1 is thinking on Arc...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-white/10 bg-black/50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Example: Send 50 USDC to 0x... via Arc Native"
                className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-500 px-10 rounded-2xl font-medium transition"
              >
                Execute
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 mt-3">
              Powered by Arc • Secure • Autonomous
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}