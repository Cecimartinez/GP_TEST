
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Delete } from '@mui/icons-material';
import { Person } from "@/models";
import { removeFavorite } from "@/redux/states";


export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  
  const dispatch = useDispatch();
  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const pageSizeOptions = [5]; 

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const columns = [
    
    {
      field: 'name',
      headerName:'Name',
      flex:1,
      minWidth:150,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },
    {
      field: 'category',
      headerName:'Categories',
      flex:1,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },
    {
      field: 'company',
      headerName:'Company',
      flex:1,
      minWidth:150,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },
    {
      field: 'levelOfHappiness',
      headerName:'Level Of Happiness',
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
      }    },
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton color="secondary" aria-label="favorites" component="label"  onClick={()=>handleClick(params.row)}>
              <Delete className="text-[#53f]" />
            </IconButton>
          }
        </>
      )
    },
  ];

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
          rows={stateFavorites}
          getRowId={(row:any) => row.id}
        />
    </>
  )
}
export default FavoriteTable;