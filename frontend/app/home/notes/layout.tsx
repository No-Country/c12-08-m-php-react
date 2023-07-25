'use client';
import { GenericContainer } from '@/components';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  console.log(pathName);
  const setTitle = () => {
    switch (pathName) {
      case '/home/notes/create':
        return 'Crear Nota';
      case RegExp(/\/home\/notes\/edit\/\w+/).exec(pathName)?.input:
        return 'Editar Nota';
      default:
        return 'Notas';
    }
  };
  return (
    <GenericContainer title={setTitle()} color='yellow' colortitle='black'>
      {children}
    </GenericContainer>
  );
};

export default layout;
