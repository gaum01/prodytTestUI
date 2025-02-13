import React from 'react'
import {Table, TableContainer} from '@mui/material'
import TableHeader from './TableHeader'
import TableRows from './TableRows'

const TableBox = (props) => {
    const {rows = [], columns = [], action = {}, className= ""} = props;
    return (
        <TableContainer sx={{padding: '5px 25px'}} className = {className} >
            <Table stickyHeader sx={{ border: 1, borderColor: "#cccccc", mt: 1 }}>
                <TableHeader columns={columns} />
                <TableRows columns={columns} rows={rows} action={action} />
            </Table>
        </TableContainer>
    )
}

export default TableBox