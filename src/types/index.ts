export interface Item {
  id: string;
  name?: string;
  title?: string;
  content: string;
  description?: string;
  imgurl?: string;
  img?: string;
  visible: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnterpriseData {
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