import { useState, useEffect } from 'react';
import { Item } from '../types';

const useItemsData = () => {
  const [prestations, setPrestations] = useState<Item[]>([]);
  const [products, setProducts] = useState<Item[]>([]);
  const [events, setEvents] = useState<Item[]>([]);
  const [promos, setPromos] = useState<Item[]>([]);
  const [articles, setArticles] = useState<Item[]>([]);
  const [meas, setMeas] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMockData = async () => {
      // Simuler un délai de chargement
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const now = new Date();
      
      // Données mockées pour la démonstration
      const mockPrestations: Item[] = [
        {
          id: '1',
          name: "Consultation stratégique",
          content: "Accompagnement personnalisé pour définir votre stratégie d'entreprise et optimiser vos processus",
          description: "Conseil en stratégie d'entreprise",
          imgurl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
        },
        {
          id: '2',
          name: "Formation équipe",
          content: "Sessions de formation adaptées aux besoins de vos équipes pour améliorer leurs compétences",
          description: "Formation professionnelle sur mesure",
          imgurl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        }
      ];
      
      const mockProducts: Item[] = [
        {
          id: '3',
          name: "Logiciel de gestion",
          content: "Solution complète pour la gestion de votre entreprise avec modules CRM, comptabilité et RH",
          description: "Logiciel tout-en-un pour entreprises",
          imgurl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
        },
        {
          id: '4',
          name: "Application mobile",
          content: "Application mobile native pour iOS et Android permettant à vos clients d'accéder à vos services",
          description: "App mobile pour vos clients",
          imgurl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: false,
          createdAt: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000),
        }
      ];
      
      const mockEvents: Item[] = [
        {
          id: '5',
          title: "Conférence annuelle 2024",
          content: "Notre grande conférence annuelle sur l'innovation et les nouvelles technologies",
          description: "Événement majeur de l'année",
          img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000),
        },
        {
          id: '6',
          title: "Workshop créatif",
          content: "Atelier de créativité et d'innovation collaborative pour stimuler l'esprit d'équipe",
          description: "Atelier team building",
          img: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 12 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000),
        }
      ];
      
      const mockPromos: Item[] = [
        {
          id: '7',
          name: "Offre spéciale été",
          content: "Profitez de notre offre exceptionnelle avec 30% de réduction sur tous nos services premium",
          description: "Réduction de 30% sur tous nos services",
          imgurl: "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        }
      ];
      
      const mockArticles: Item[] = [
        {
          id: '8',
          title: "Les tendances 2024",
          content: "Découvrez les principales tendances technologiques et business qui marqueront cette année",
          description: "Article sur les tendances de l'année",
          img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
        },
        {
          id: '9',
          title: "Guide du débutant",
          content: "Tout ce qu'il faut savoir pour bien commencer dans le monde du digital et de l'entrepreneuriat",
          description: "Guide complet pour débutants",
          img: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 18 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000),
        }
      ];
      
      const mockMeas: Item[] = [
        {
          id: '10',
          name: "Produit vedette",
          content: "Notre solution la plus populaire cette semaine, plébiscitée par nos clients",
          description: "Le produit le plus populaire",
          imgurl: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
          visible: true,
          createdAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
        }
      ];
      
      setPrestations(mockPrestations);
      setProducts(mockProducts);
      setEvents(mockEvents);
      setPromos(mockPromos);
      setArticles(mockArticles);
      setMeas(mockMeas);
      setLoading(false);
    };

    loadMockData();
  }, []);

  // Fonctions CRUD génériques
  const generateId = () => Date.now().toString();

  const addItem = (items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>) => 
    (itemData: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newItem: Item = {
        ...itemData,
        id: generateId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setItems(prev => [newItem, ...prev]);
    };

  const updateItem = (items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>) => 
    (id: string, updates: Partial<Item>) => {
      setItems(prev => prev.map(item => 
        item.id === id ? { ...item, ...updates, updatedAt: new Date() } : item
      ));
    };

  const deleteItem = (items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>) => 
    (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };

  const toggleVisibility = (items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>) => 
    (id: string) => {
      setItems(prev => prev.map(item => 
        item.id === id ? { ...item, visible: !item.visible, updatedAt: new Date() } : item
      ));
    };

  return {
    // Data
    prestations,
    products,
    events,
    promos,
    articles,
    meas,
    loading,
    
    // CRUD functions
    prestationActions: {
      onAddItem: addItem(prestations, setPrestations),
      onUpdateItem: updateItem(prestations, setPrestations),
      onDeleteItem: deleteItem(prestations, setPrestations),
      onToggleVisibility: toggleVisibility(prestations, setPrestations),
    },
    productActions: {
      onAddItem: addItem(products, setProducts),
      onUpdateItem: updateItem(products, setProducts),
      onDeleteItem: deleteItem(products, setProducts),
      onToggleVisibility: toggleVisibility(products, setProducts),
    },
    eventActions: {
      onAddItem: addItem(events, setEvents),
      onUpdateItem: updateItem(events, setEvents),
      onDeleteItem: deleteItem(events, setEvents),
      onToggleVisibility: toggleVisibility(events, setEvents),
    },
    promoActions: {
      onAddItem: addItem(promos, setPromos),
      onUpdateItem: updateItem(promos, setPromos),
      onDeleteItem: deleteItem(promos, setPromos),
      onToggleVisibility: toggleVisibility(promos, setPromos),
    },
    articleActions: {
      onAddItem: addItem(articles, setArticles),
      onUpdateItem: updateItem(articles, setArticles),
      onDeleteItem: deleteItem(articles, setArticles),
      onToggleVisibility: toggleVisibility(articles, setArticles),
    },
    meaActions: {
      onAddItem: addItem(meas, setMeas),
      onUpdateItem: updateItem(meas, setMeas),
      onDeleteItem: deleteItem(meas, setMeas),
      onToggleVisibility: toggleVisibility(meas, setMeas),
    },
  };
};

export default useItemsData;