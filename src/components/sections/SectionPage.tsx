import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Filter } from 'lucide-react';
import { Item } from '../../types';
import ItemModal from './ItemModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

interface SectionPageProps {
  title: string;
  items: Item[];
  onAddItem: (item: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onUpdateItem: (id: string, item: Partial<Item>) => void;
  onDeleteItem: (id: string) => void;
  onToggleVisibility: (id: string) => void;
}

const SectionPage: React.FC<SectionPageProps> = ({
  title,
  items,
  onAddItem,
  onUpdateItem,
  onDeleteItem,
  onToggleVisibility,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVisible, setFilterVisible] = useState<'all' | 'visible' | 'hidden'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [deleteItem, setDeleteItem] = useState<Item | null>(null);

  const filteredItems = items.filter(item => {
    const matchesSearch = (item.name || item.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterVisible === 'all' || 
                         (filterVisible === 'visible' && item.visible) ||
                         (filterVisible === 'hidden' && !item.visible);
    
    return matchesSearch && matchesFilter;
  });

  const handleAddItem = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEditItem = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSaveItem = (itemData: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingItem) {
      onUpdateItem(editingItem.id, { ...itemData, updatedAt: new Date() });
    } else {
      onAddItem(itemData);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleDeleteItem = (id: string) => {
    const item = items.find(item => item.id === id);
    if (item) {
      setDeleteItem(item);
    }
  };

  const confirmDelete = () => {
    if (deleteItem) {
      onDeleteItem(deleteItem.id);
      setDeleteItem(null);
    }
  };

  const cancelDelete = () => {
    setDeleteItem(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Gérez vos {title.toLowerCase()} - {items.length} élément(s) au total
        </p>
      </div>

      {/* Actions et filtres */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Recherche */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Filtres et actions */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterVisible}
                onChange={(e) => setFilterVisible(e.target.value as 'all' | 'visible' | 'hidden')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              >
                <option value="all">Tous</option>
                <option value="visible">Visibles</option>
                <option value="hidden">Masqués</option>
              </select>
            </div>
            
            <button
              onClick={handleAddItem}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Plus className="w-4 h-4" />
              Ajouter
            </button>
          </div>
        </div>
      </div>

      {/* Liste des éléments */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {searchTerm || filterVisible !== 'all' ? 'Aucun résultat' : 'Aucun élément'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {searchTerm || filterVisible !== 'all' 
                ? 'Essayez de modifier vos critères de recherche'
                : `Commencez par ajouter votre premier ${title.slice(0, -1).toLowerCase()}`
              }
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                !item.visible ? 'opacity-60' : ''
              }`}
            >
              <div className="flex gap-6">
                {/* Image */}
                {(item.imgurl || item.img) && (
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={item.imgurl || item.img}
                      alt={item.name || item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {item.name || item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                        {item.description || item.content}
                      </p>
                    </div>
                    
                    {/* Badge de statut */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.visible 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {item.visible ? 'Visible' : 'Masqué'}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleVisibility(item.id)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        item.visible
                          ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-200'
                      }`}
                    >
                      {item.visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {item.visible ? 'Masquer' : 'Afficher'}
                    </button>
                    
                    <button
                      onClick={() => handleEditItem(item)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg text-sm font-medium transition-colors duration-200 dark:bg-blue-900 dark:text-blue-200"
                    >
                      <Edit className="w-4 h-4" />
                      Modifier
                    </button>
                    
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors duration-200 dark:bg-red-900 dark:text-red-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      Supprimer
                    </button>
                  </div>

                  {/* Métadonnées */}
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Créé le {item.createdAt.toLocaleDateString()} • 
                    Modifié le {item.updatedAt.toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ItemModal
          item={editingItem}
          onSave={handleSaveItem}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
          }}
          title={editingItem ? 'Modifier' : 'Ajouter'}
        />
      )}

      {/* Modal de confirmation de suppression */}
      {deleteItem && (
        <ConfirmDeleteModal
          item={deleteItem}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default SectionPage;