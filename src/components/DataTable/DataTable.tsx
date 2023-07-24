import React, { useState } from 'react';
import Box from '@mui/material/Box'
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@mui/material'

// internal imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { HeroForm } from '../HeroForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'comicsAppeared',
    headerName: 'Comic Appeared in',
    sortable: false,
    width: 160,
  },
  {
    field: 'superpowers',
    headerName: 'Superpowers',
    sortable: false,
    width: 160,
  },
];

    export const DataTable = () => {
      const {heroData, getData } = useGetData()
      const [open, setOpen ] = useState(false)
      const [ gridData, setData ] = useState<GridRowSelectionModel>([])

      const handleOpen = () => {
        setOpen(true)
      }

      const handleClose = () => {
        setOpen(false)
      }

      const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
      }
      
      
      return (
        <Box sx={{ height: 400, width: '100%'}}>
            <DataGrid
                rows={heroData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => setData(newSelectionModel)}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant = 'contained' color = 'warning' onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title'>Update a Comic</DialogTitle>
              <DialogContent>
                <DialogContentText>Comic id: {gridData[0]}</DialogContentText>
                <HeroForm id={`${gridData[0]}`} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='error'>Cancel</Button>
              </DialogActions>
          </Dialog>
        </Box>
    )
  }