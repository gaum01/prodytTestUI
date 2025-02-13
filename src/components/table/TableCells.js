import React from "react"
import TableCell from '@mui/material/TableCell';
import Action from './Action'
import { Box, IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const TableCells = ({ columns, action, row }) => {
  // const value = row[column.id];
  return (
    <React.Fragment>
      {columns.map((column) => {
        const value = column.render ? column.render(row[column.id]) : row[column.id];
        return (
          <TableCell key={column.id} align={column.align}>
            {action[column.id] ? (
              <Action row={row} data={action[column.id]} />
            ) : column.id === 'state' && row.extra ? (
              <ValWithInfo val={value} info={row.extra} />
            ) : (
              value
            )}
          </TableCell>
        );
      })}

    </React.Fragment>
  )
}
export default TableCells;

const ValWithInfo = ({val, info}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <p style={{ margin: 0 }}>{val}</p>
      <Tooltip title={info}>
        <IconButton size="small">
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};