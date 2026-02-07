import { createRoot } from 'react-dom/client';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      <h1 className="text-4xl font-bold mb-4">AVX CORE V4.8</h1>
      <p className="text-xl mb-6">Sistema inicializado com sucesso</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-green-500 p-4 rounded">
          <h2 className="text-2xl mb-2">Status do Sistema</h2>
          <ul className="space-y-2">
            <li>✅ React 19 Carregado</li>
            <li>✅ Vercel Configurado</li>
            <li>✅ Roteamento SPA Ativo</li>
            <li>🟡 AGUARDANDO: Módulos AVX</li>
          </ul>
        </div>
        
        <div className="border border-green-500 p-4 rounded">
          <h2 className="text-2xl mb-2">Controles</h2>
          <button className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded mr-2">
            Inicializar
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
            Diagnóstico
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-green-400">Sistema operacional: {navigator.userAgent}</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
