'use client';

import { useState } from 'react';

export default function ProjectXArc() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello, I'm X-1 — Project X's Autonomous Agent on Arc Network. What do you want to execute today?" }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = () => {
    // Fake wallet connection
    setIsThinking(true);
    
    setTimeout(() => {
      const fakeAddress = "0x" + Math.random().toString(16).slice(2, 10).toUpperCase() + "...";
      setWalletAddress(fakeAddress);
      setWalletConnected(true);
      setIsThinking(false);
      
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: `✅ Wallet Connected Successfully!\nAddress: ${fakeAddress}` 
      }]);
    }, 1200);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: input }]);
    const userInput = input;
    setInput('');
    setIsThinking(true);

    setTimeout(() => {
      const responses = [
        "Transaction initiated on Arc Native...",
        "Capital flow optimized. Executing optimal route.",
        "Agent X-1 has successfully executed the intent.",
        "On-chain confirmation received. Monitoring complete."
      ];
      
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }]);
      setIsThinking(false);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/90 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-xl">X</div>
            <h1 className="text-2xl font-bold tracking-tighter">Project X <span className="text-blue-500">@arc</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/30">
              Arc Testnet Connected
            </div>
            
            <button 
              onClick={connectWallet}
              className="bg-white text-black px-6 py-2.5 rounded-2xl font-medium hover:bg-gray-200 transition-all active:scale-95"
            >
              {walletConnected ? `✓ ${walletAddress}` : "Connect Wallet"}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-3">X-1 Autonomous Agent</h2>
          <p className="text-gray-400 text-lg">Intent-Driven Execution Engine on Arc Network</p>
        </div>

        {/* Chat Container */}
        <div className="bg-zinc-900/70 border border-white/10 rounded-3xl h-[560px] flex flex-col overflow-hidden shadow-2xl">
          <div className="flex-1 p-6 overflow-y-auto space-y-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-blue-600' 
                    : 'bg-zinc-800 border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-3 text-gray-400 pl-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                </div>
                X-1 is executing on Arc...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-white/10 bg-black/60">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Send 50 USDC to 0x... via Arc Native"
                className="flex-1 bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 placeholder-gray-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-500 px-10 rounded-2xl font-medium transition-all active:scale-95"
              >
                Execute
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}