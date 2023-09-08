
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
      heraderName:'Name',
      flex:1,
      minWidth:150,
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },
    {
      field: 'Category',
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
      renderCell: (params:GridRenderCellParams) => <>{params.value }</>
    },
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