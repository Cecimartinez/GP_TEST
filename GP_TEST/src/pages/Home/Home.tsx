import React from 'react';
import { PeopleTable } from './components/PeopleTable';

export interface HomeInterface {}
export const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <div style={{ height: 400, width: '100%' }} className='flex justify-center items-center'>
        <PeopleTable/>
      </div>
    </>
  );
};
