import { Person } from '@/models/people';
import { addFavorite } from '@/redux';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { red } from '@mui/material/colors';

export interface PeopleTableInterface{}

export const PeopleTable:React.FC<PeopleTableInterface> = ()=>{

  const favoritePeople = useSelector((store: AppStore) =>  store.favorites);


  const findPerson = (person:Person) => !!favoritePeople.find(p => p.id === person.id)
  const filterPerson = (person:Person) => favoritePeople.filter(p => p.id !== person.id)

  const statePeople = useSelector((store: AppStore) => store.people);
  const dispatch = useDispatch();

  const pageSizeOptions = [5]; 
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
        <Checkbox size='small' checked={findPerson(params.row) } onChange={()=> handleChange(params.row)} 
            sx={{
              '&.Mui-checked': {
                color: '#53f', 
              },
            }}
        />
      } </> },
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
    },
    {
      field: 'levelOfHappiness',
      heraderName:'Level Of Happiness',
      flex:1,
      minWidth:150,
      renderCell: (params: GridRenderCellParams) => {
        const happinessPercentage = params.value as number;
        const emoji = happinessPercentage >= 80 ? '😁' : happinessPercentage >= 60 ? '😃' : happinessPercentage >= 40 ? '🙂' : happinessPercentage >= 20 ? '😐' : '😞';
    
        return (
          <span role="img" aria-label={`Emoji de felicidad ${emoji}`}>
            {emoji} {happinessPercentage}%
          </span>
        );
      }    }
  ];

  useEffect(() => {
    setPeopleSelected(favoritePeople);
  }, [favoritePeople]);

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