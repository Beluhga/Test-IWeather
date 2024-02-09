import { ReactNode, createContext, useEffect, useState, } from 'react';

import { CityProps } from '@services/getCityByNameService';
import { getStorageCity, removeStorageCity, saveStorageCity } from '@libs/asyncStorage/cityStorage';

type CityContextProviderProps = {
  children: ReactNode
}

type CityContextDataProps = {
  cityIsLoading: boolean;
  city: CityProps | null;
  handleChanceCity: (city: CityProps) => void;
}

export const CityContext = createContext<CityContextDataProps>({} as CityContextDataProps);

export function CityProvider({ children }: CityContextProviderProps) {
  const [cityIsLoading, setCityIsLoading] = useState(true);
  const [city, setCity] = useState<CityProps | null>(null);

  // no momento que a pessoa seleciona uma cidade
  async function handleChanceCity(selectedCity: CityProps) {
    setCityIsLoading(true);

    // ela vai atualizar o store
    await saveStorageCity(selectedCity);
    setCity(selectedCity);

    setCityIsLoading(false);
  }

  useEffect(() => {
    setCityIsLoading(true);
    removeStorageCity();

    getStorageCity() // busca as informações no storage, de forma assincrona
      .then((data) => setCity(data))
      .finally(() => setCityIsLoading(false));
  }, []);

  return (
    <CityContext.Provider value={{
      city,
      cityIsLoading,
      handleChanceCity
    }}>
      {children}
    </CityContext.Provider>
  )
}