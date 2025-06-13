import { ClipLoader } from 'react-spinners';
import { cn } from '../lib/utils';
import React, { createContext, type ReactNode, useContext, useRef, useState } from 'react';

type LoadingData = {
  isOpenLoading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
};

export const LoadingContext = createContext<LoadingData>({
  isOpenLoading: false,
  openLoading: () => {},
  closeLoading: () => {},
});

type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isOpenLoading, setIsOpenLoading] = useState(false);
  const loadingElement = useRef<HTMLDivElement>(null);

  const openLoading = () => setIsOpenLoading(true);
  const closeLoading = () => setIsOpenLoading(false);

  return (
    <LoadingContext.Provider value={{ isOpenLoading, openLoading, closeLoading }}>
      <div className="relative overflow-hidden">
        {children}
        <div
          ref={loadingElement}
          className={cn(
            isOpenLoading ? 'visible' : 'invisible',
            'absolute inset-0 z-[9999] flex h-screen w-screen items-center justify-center',
          )}>
          <div className="absolute h-screen w-screen bg-[#0000007e] opacity-70"></div>
          <ClipLoader loading={isOpenLoading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
