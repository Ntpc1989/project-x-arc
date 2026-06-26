'use client';

export default function ProjectXArc() {
  const handleLaunch = () => {
    alert("🚀 Project X @arc Launching Soon!\n\nAbhi AI Agent integrate kar rahe hain...");
    // Yahan baad mein real functionality add kar sakte hain
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="text-center px-6 relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Project X <span className="text-blue-500">@arc</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-md mx-auto">
          Next level AI Agent on Arc Network
        </p>

        <button 
          onClick={handleLaunch}
          className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold 
                     hover:bg-gray-200 transition-all active:scale-95"
        >
          Launch Project X
        </button>
      </div>
    </div>
  );
}