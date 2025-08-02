import { useState, useEffect } from 'react';

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

const useEnterpriseData = () => {
  const [enterpriseData, setEnterpriseData] = useState<EnterpriseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnterpriseData = async () => {
      try {
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Données d'exemple - remplacez par votre vraie API
        const mockData: EnterpriseData = {
          id: 1,
          email: "contact@entreprise.com",
          name: "Mon Entreprise",
          logourl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200",
          adress: "123 Rue de la Paix",
          zipCode: "75001",
          city: "Paris",
          phone: "+33 1 23 45 67 89",
          facebook: "https://facebook.com/monentreprise",
          twitter: "https://twitter.com/monentreprise",
          instagram: "https://instagram.com/monentreprise",
          tictoc: "https://tiktok.com/@monentreprise",
          website: "https://monentreprise.com"
        };

        setEnterpriseData(mockData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchEnterpriseData();
  }, []);

  return { enterpriseData, loading, error };
};

export default useEnterpriseData;