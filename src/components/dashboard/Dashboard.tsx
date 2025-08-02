import React from "react";
import { Settings, TrendingUp, Users, Activity, Calendar, Gift, FileText, Star } from "lucide-react";
import Header from "../header/Header";
import DashboardPreview from "./dashboard-preview/DashboardPreview";
import Profile from "../../app/profile/Profile";
import useEnterpriseData from "../../app/useEnterpriseData";
import Employees from "../../app/employees/Employees";
import { Item } from "../../types";

interface ItemsData {
  prestations: Item[];
  products: Item[];
  events: Item[];
  promos: Item[];
  articles: Item[];
  meas: Item[];
  loading: boolean;
}

interface DataSectionProps {
  title: string;
  icon: React.ReactNode;
  data: Item[];
  colorClasses: string;
}

const DataSection = ({ title, icon, data, colorClasses }: DataSectionProps) => (
  <div className={`bg-gradient-to-br ${colorClasses} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="ml-auto text-white/80 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
        {data.length}
      </span>
    </div>

    {data.length === 0 ? (
      <div className="text-center py-12 text-white/70">
        <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <p className="text-lg">Aucune donnée active</p>
      </div>
    ) : (
      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {data.slice(0, 3).map((item) => (
          <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-200 cursor-pointer group">
            <div className="flex gap-4">
              {item.imgurl && (
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={item.imgurl} 
                    alt={item.name || item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm mb-2 truncate">
                  {(item.name || item.title)?.substring(0, 60)}
                </h4>
                <p className="text-white/70 text-xs line-clamp-2">
                  {(item.description || item.content)?.substring(0, 120)}
                </p>
              </div>
            </div>
          </div>
        ))}
        {data.length > 3 && (
          <div className="text-center pt-2">
            <span className="text-white/60 text-sm">+{data.length - 3} autres</span>
          </div>
        )}
      </div>
    )}
  </div>
);

interface DashboardProps {
  onLogout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  itemsData: ItemsData;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, darkMode, toggleDarkMode, itemsData }) => {
  const { enterpriseData } = useEnterpriseData();
  const { prestations, products, events, promos, articles, meas } = itemsData;
  
  const totalActiveItems = prestations.filter(p => p.visible).length + 
                          products.filter(p => p.visible).length + 
                          events.filter(p => p.visible).length + 
                          promos.filter(p => p.visible).length + 
                          articles.filter(p => p.visible).length + 
                          meas.filter(p => p.visible).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          onLogout={onLogout} 
        />
      <div className="flex gap-6 p-6 max-w-[1600px] mx-auto">
        {/* Sidebar gauche */}
        <div className="w-80 space-y-6">
          {/* Profil de l'entreprise */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            {enterpriseData && <Profile enterpriseData={enterpriseData} />}
          </div>

          {/* Section employés */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white">Employés actifs</h3>
              </div>
              <button
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 group"
              >
                <Settings className="w-5 h-5 text-gray-600 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            <Employees />
          </div>

          {/* Statistiques rapides */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold">Résumé</h3>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{totalActiveItems}</div>
              <p className="text-white/80">Éléments actifs au total</p>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex-1 space-y-6">
          <div className="space-y-6">
            <DataSection
              title="Prestations"
              icon={<Activity className="w-5 h-5 text-white" />}
              data={prestations.filter(p => p.visible)}
              colorClasses="from-blue-500 to-blue-600"
            />

            <DataSection
              title="Produits"
              icon={<TrendingUp className="w-5 h-5 text-white" />}
              data={products.filter(p => p.visible)}
              colorClasses="from-emerald-500 to-emerald-600"
            />

            <DataSection
              title="Événements"
              icon={<Calendar className="w-5 h-5 text-white" />}
              data={events.filter(p => p.visible)}  
              colorClasses="from-purple-500 to-purple-600"
            />

            <DataSection
              title="Promotions"
              icon={<Gift className="w-5 h-5 text-white" />}
              data={promos.filter(p => p.visible)}
              colorClasses="from-orange-500 to-orange-600"
            />

            <DataSection
              title="Articles"
              icon={<FileText className="w-5 h-5 text-white" />}
              data={articles.filter(p => p.visible)}
              colorClasses="from-teal-500 to-teal-600"
            />

            <DataSection
              title="Mise en avant"
              icon={<Star className="w-5 h-5 text-white" />}
              data={meas.filter(p => p.visible)}
              colorClasses="from-pink-500 to-pink-600"
            />
          </div>
        </div>

        {/* Sidebar droite */}
        <div className="w-80">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;