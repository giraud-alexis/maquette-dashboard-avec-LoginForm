import React from 'react';
import { Building2, Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram } from 'lucide-react';

interface EnterpriseData {
  id: number;
  email: string;
  name: string;
  logourl: string;
  adress: string;
  zipCode: string;
  city: string;
  phone: string;
  facebook: string;
  twitter: string;
  instagram: string;
  tictoc: string;
  website: string;
}

interface ProfileProps {
  enterpriseData: EnterpriseData;
}

const Profile: React.FC<ProfileProps> = ({ enterpriseData }) => {
  return (
    <div className="space-y-6">
      {/* Logo et nom de l'entreprise */}
      <div className="text-center">
        {enterpriseData.logourl ? (
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img 
              src={enterpriseData.logourl} 
              alt={enterpriseData.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Building2 className="w-10 h-10 text-white" />
          </div>
        )}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{enterpriseData.name}</h2>
      </div>

      {/* Informations de contact */}
      <div className="space-y-3">
        {enterpriseData.email && (
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-indigo-500" />
            <span className="truncate">{enterpriseData.email}</span>
          </div>
        )}
        
        {enterpriseData.phone && (
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-indigo-500" />
            <span>{enterpriseData.phone}</span>
          </div>
        )}
        
        {(enterpriseData.adress || enterpriseData.city) && (
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span className="truncate">
              {enterpriseData.adress && `${enterpriseData.adress}, `}
              {enterpriseData.zipCode && `${enterpriseData.zipCode} `}
              {enterpriseData.city}
            </span>
          </div>
        )}
        
        {enterpriseData.website && (
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Globe className="w-4 h-4 text-indigo-500" />
            <a 
              href={enterpriseData.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 truncate"
            >
              {enterpriseData.website}
            </a>
          </div>
        )}
      </div>

      {/* Réseaux sociaux */}
      {(enterpriseData.facebook || enterpriseData.twitter || enterpriseData.instagram) && (
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Réseaux sociaux</h3>
          <div className="flex gap-2">
            {enterpriseData.facebook && (
              <a 
                href={enterpriseData.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {enterpriseData.twitter && (
              <a 
                href={enterpriseData.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {enterpriseData.instagram && (
              <a 
                href={enterpriseData.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;