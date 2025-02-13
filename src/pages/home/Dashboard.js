import React, {useState} from 'react'
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHeader from '../../components/table/TableHeader';
import TableRows from '../../components/table/TableRows';
import Pagination from '@mui/material/Pagination';

import {tableLimit} from '../../utils/constant'
import { dummyUserData } from '../../dummy/data';
import { dashboardStyles } from './style';


const columns = [
  {
    id: 'seriol_no',
    label: 'Sr.No.',
    width: '4%',
    align: 'left'
  },
  {
    id: 'customer_name',
    label: 'Customer Name',
    width: '15%',
    align: 'center'
  },
  {
    id: 'email',
    label: 'Email',
    width: '15%',
    align: 'center'
  },
  {
    id: 'contact_no',
    label: 'Contact No',
    width: '8%'
  },
  {
    id: 'product',
    label: 'Product Name',
    width: '8%'
  },
  {
    id: 'product_category',
    label: 'Category',
    width: '10%',
    align: 'center'
  },
  {
    id: 'purchase_date',
    label: 'Purchase Date',
    width: '5%',
    align: 'center'
  },
  {
    id: 'warranty_status',
    label: 'Warranty Status',
    width: '5%',
    align: 'center'
  },
  {
    id: 'description',
    label: 'Description',
    width: '20%',
    align: 'center'
  },
  {
    id: 'action',
    label: '',
    width: '5%',
    align: 'right'
  },
];

const Dashboard = () => {
  const classes = dashboardStyles();

  const [totalUser] = useState(dummyUserData.length);
  const [page, setPage] = useState(1);

  const action = {'action': [
    { 'name': 'Edit', 'params': ['categoryId'], 'onClick': ()=>{} },
    { 'name': 'Delete' , 'params': ['categoryId'], 'onClick':()=>{} }
  ]};

  function createData(customer, index) {
    return {
      key: index,
      id: (page-1) * tableLimit + index,
      seriol_no: (page-1) * tableLimit + index,
      customer_name: customer.customer_name, 
      email: customer.email, 
      contact_no: customer.contact_no, 
      product: customer.product, 
      product_category: customer.product_category,
      purchase_date: customer.purchase_date, 
      warranty_status: customer.warranty_status ? 'Yes' : 'No', 
      description: customer.description, 
    };
  }
  const rows = dummyUserData.slice((page - 1) * tableLimit, page * tableLimit).map((customer, index) => createData(customer, index+1));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className={classes.mainDiv}>
        <div className={classes.headerDiv}>Dashboard</div>
        <div className={classes.headerDetailOuterDiv}>
          <HeadingDetails textHeading='Resolved Query' value={5234} total={79997} />
          <HeadingDetails textHeading='Issues' value={3233} total={12994} />
          <HeadingDetails textHeading='Damaged Product' value={7231} total={59991} />
          <HeadingDetails textHeading='Call Completed' value={61234} total={669992} />
        </div>
        <Grid item xs={12} position="static" className={classes.tableGridContainer}>
          <TableContainer className={classes.tableContainerDiv}>
            <Table stickyHeader aria-label="sticky table">
              <TableHeader columns={columns} />
              <TableRows columns={columns} rows={rows} action={action} />
            </Table>
          </TableContainer>
          <Pagination
            sx={{ float: "right", marginTop: '15px' }}
            component="div"
            count={Math.ceil(totalUser / tableLimit)}
            page={page}
            color="primary"
            onChange={handleChangePage}
          />
        </Grid>
      </div>
  )
}

const HeadingDetails = (props) => {
  const {textHeading, value, total} = props;
  const classes = dashboardStyles();
  return(
    <div className={classes.headingDetailsInnerDiv}>
      <div className={classes.headingDetailHeading}>{textHeading}</div>
      <div className={classes.headingDetailValue}>{value} / {total}</div>
    </div>
  )
}

export default Dashboard;
