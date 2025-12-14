export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: '#0f0', height: '100vh', padding: '50px', fontFamily: 'monospace' }}>
      <h1 style={{ borderBottom: '1px solid #0f0' }}>SYNTAX ERROR // OPS CENTER</h1>
      
      <div style={{ marginTop: '50px', border: '1px solid red', padding: '20px' }}>
        <h2>⚠️ CURRENT STATUS: <span style={{ color: 'red', animation: 'blink 1s infinite' }}>CRITICAL</span></h2>
        <p>AI AGENT: Llama-3 (Groq)</p>
        <p>LAST LOG: MEMORY LEAK DETECTED</p>
        <p>ACTION: RESTARTING SERVER...</p>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
