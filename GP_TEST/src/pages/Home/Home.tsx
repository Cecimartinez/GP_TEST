import { useEffect } from 'react';
import { PeopleTable } from './components/PeopleTable';
import { useDispatch } from 'react-redux';
import { addPeople } from '@/redux';
import { People } from '@/data/people';

export interface HomeInterface {}
export const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(addPeople(People))
  },[])


  return (
    <>
      <div style={{ height: 400, width: '100%' }} className='flex justify-center items-center'>
        <PeopleTable/>
      </div>
    </>
  );
};
