import { People } from '@/data/people';
import { Person } from '@/models/people';
import { addFavorite, addPeople } from '@/redux';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface PeopleTableInterface{}

export const PeopleTable:React.FC<PeopleTableInterface> = ()=>{

  const findPerson = (person:Person) => !!peopleSelected.find(p => p.id === person.id)
  const filterPerson = (person:Person) => peopleSelected.filter(p => p.id !== person.id)

  const statePeople = useSelector((store: AppStore) => store.people);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);


  const [peopleSelected, setPeopleSelected] = useState <Person[]>([])

  const handleChange = (person:Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...peopleSelected, person];
    dispatch(addFavorite(filteredPeople));
    setPeopleSelected(filteredPeople);

  }

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });


  const columns = [
    {
      field: 'actions',
      type:'actions',
      sortable:false,
      heraderName:'',
      width:50,
      renderCell: (params:GridRenderCellParams) => <> {

        <Checkbox size='small' checked={findPerson(params.row) } onChange={()=> handleChange(params.row)}  />
      }
        
        
        </>
    },
    {
      field: 'name',
      heraderName:'Name',
      flex:1,
      minWidth:150,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },

    {
      field: 'category',
      heraderName:'Categories',
      flex:1,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },

    {
      field: 'company',
      heraderName:'Company',
      flex:1,
      minWidth:150,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    }
  ];


    const pageSizeOptions = [5]; 

    

  return (
    <>
    <DataGrid
          disableColumnSelector
          disableRowSelectionOnClick
          autoHeight 
          paginationModel={paginationModel}  
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={pageSizeOptions} 
          columns={columns}
          rows={statePeople}
          getRowId={(row:any) => row.id}
        />
    </>
  )
}