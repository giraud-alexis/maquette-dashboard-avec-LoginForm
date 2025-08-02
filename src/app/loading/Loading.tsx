import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Chargement en cours...</h2>
          <p className="text-gray-600">Veuillez patienter pendant que nous préparons votre dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;