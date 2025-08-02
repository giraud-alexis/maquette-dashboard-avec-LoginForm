import React from 'react';
import { Eye, ExternalLink, Smartphone, Monitor } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Eye className="w-5 h-5 text-indigo-600" />
        </div>
        <h3 className="font-bold text-gray-800">Aperçu du site</h3>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-200">
          <div className="flex items-center justify-center h-32 text-gray-400">
            <div className="text-center">
              <Monitor className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">Aperçu du site web</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            <Monitor className="w-4 h-4" />
            <span className="text-sm">Desktop</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm">Mobile</span>
          </button>
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-200">
          <ExternalLink className="w-4 h-4" />
          <span>Voir le site en direct</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardPreview;