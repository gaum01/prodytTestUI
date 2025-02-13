import { makeStyles } from '@mui/styles';

export const dashboardStyles = makeStyles((theme) => ({
    mainDiv: {
        // border: '1px solid red',
    },
    headerDiv: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    headerDetailOuterDiv: {
        margin: '10px 0 15px 0',
        display: 'flex',
        // justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
    },
    headingDetailsInnerDiv: {
        display: 'flex',
        flexDirection: 'column',
        width: '22%',
        minWidth: '250px',
        padding: '12px 0px 12px 16px',
        borderRadius: 4,
        backgroundColor: theme.palette.background.primary,
    },
    headingDetailHeading: {
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1px'
    },
    headingDetailValue: {
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginTop: '5px'
    },
    tableGridContainer: {
        p: '0px !important', 
        border: '1px solid',
        borderColor: theme.palette.table.border.primary,
    },
    tableContainerDiv: {
        p: "0px 0px 5px 0px", 
        maxHeight: '430px',
        '&::-webkit-scrollbar': {
            display: 'none',  // Hide the scrollbar in Webkit browsers (Chrome, Safari, etc.)
        },
        scrollbarWidth: 'none',
    }
}))