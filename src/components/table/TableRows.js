import React from "react"
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCells from './TableCells';

const TableRows = ({ columns, rows, action, tableRowStyles={} }) => {
  return (
    <TableBody>
    {rows.map((row) => {
        return (
          <TableRow key={row.id} style={tableRowStyles}>
            <TableCells columns={columns} action={action} row={row}/>
          </TableRow>
        );
      })}
  </TableBody>
  )
}
export default TableRows;