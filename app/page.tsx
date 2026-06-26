export default function ProjectXArc() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Project X <span className="text-blue-500">@arc</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-md mx-auto">
          Next level AI Agent on Arc Network
        </p>

        <button 
          className="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition-all"
        >
          Launch Project X
        </button>
      </div>
    </div>
  );
}