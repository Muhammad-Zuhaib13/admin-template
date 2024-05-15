import {useState, useMemo, ReactElement } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import {Button, Grid, Typography, InputLabel, FormControl, MenuItem, Select, SelectChangeEvent, Divider, Stack, Table, TableBody, 
  TableCell, TableHead, TableRow} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport, IndeterminateCheckbox, TablePagination, TableRowSelection } from 'components/third-party/ReactTable';

// third-party
import { useFilters, useRowSelect, useTable, usePagination, Column, Row, HeaderGroup, Cell } from 'react-table';

import makeData from 'data/react-table';
import { renderFilterTypes } from 'utils/react-table';

// types
import { ThemeDirection } from 'types/config';

// assets


// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const AdminUserList = () => {

    const [sysLogs, setLogs] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLogs(event.target.value as string);
    };


    // React Table
    function ReactTable({ columns, data }: { columns: Column[]; data: [] }) {
        const theme = useTheme();
        const filterTypes = useMemo(() => renderFilterTypes, []);
      
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          prepareRow,
          rows,
          page,
          gotoPage,
          setPageSize,
          state: { selectedRowIds, pageIndex, pageSize },
          selectedFlatRows
        } = useTable(
          {
            columns,
            data,
            filterTypes,
            initialState: { pageIndex: 0, pageSize: 10, selectedRowIds: { 0: true, 5: true, 7: true } }
          },
          useFilters,
          usePagination,
          useRowSelect,
          (hooks) => {
            hooks.allColumns.push((columns: Column[]) => [
              {
                id: 'row-selection-chk',
                accessor: 'Selection',
                Header: ({ getToggleAllPageRowsSelectedProps }) => (
                  <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />
                ),
                Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              },
              ...columns
            ]);
          }
        );
      
        return (
            <>
                <MainCard
                    title="Search Result"
                    content={false}
                    sx={{ border: 0, p: 0}}
                    secondary={<CSVExport data={selectedFlatRows.map((d: Row) => d.original)} filename={'row-selection-table.csv'}/>}
                >
                    <ScrollX>
                        <TableRowSelection selected={Object.keys(selectedRowIds).length} />
                        <Stack
                        spacing={3}
                        sx={{
                            ...(theme.direction === ThemeDirection.RTL && {
                            '.MuiTable-root': { width: { xs: '930px', sm: 'inherit' } },
                            pre: { width: { xs: '930px', sm: 'inherit' }, overflowX: 'unset' }
                            })
                        }}
                        >
                            <Table {...getTableProps()}>
                                <TableHead>
                                    {headerGroups.map((headerGroup, index) => (
                                        <TableRow {...headerGroup.getHeaderGroupProps()} key={index} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                                        {headerGroup.headers.map((column: HeaderGroup, i) => (
                                            <TableCell {...column.getHeaderProps([{ className: column.className }])} key={i}>
                                            {column.render('Header')}
                                            </TableCell>
                                        ))}
                                        </TableRow>
                                    ))}
                                </TableHead>
                                <TableBody {...getTableBodyProps()}>
                                    {page.map((row: Row, i: number) => {
                                        prepareRow(row);
                                        return (
                                        <TableRow
                                            {...row.getRowProps()}
                                            key={i}
                                            onClick={() => {
                                            row.toggleRowSelected();
                                            }}
                                            sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                                        >
                                            {row.cells.map((cell: Cell, index) => (
                                            <TableCell {...cell.getCellProps([{ className: cell.column.className }])} key={index}>
                                                {cell.render('Cell')}
                                            </TableCell>
                                            ))}
                                        </TableRow>
                                        );
                                    })}
                                    <TableRow>
                                        <TableCell sx={{ p: 2, pb: 0 }} colSpan={8}>
                                        <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Stack>
                    </ScrollX>
                </MainCard>
            </>
        );
    }

    // React Table Row Selection

    const RowSelectionTable = () => {
        const data = useMemo(() => makeData(0), []);
        const columns = useMemo(
          () => [
            {
              Header: 'First Name',
              accessor: 'firstName'
            },
            {
              Header: 'Last Name',
              accessor: 'lastName'
            },
            {
              Header: 'Designation',
              accessor: 'designation'
            },
            {
              Header: 'Agency Name',
              accessor: 'agencyName'
            },
            {
              Header: 'Role',
              accessor: 'role'
            },
            {
                Header: 'Mobile',
                accessor: 'mobile'
            },
            {
                Header: 'Username',
                accessor: 'userName'
            },
            {
                Header: 'Password',
                accessor: 'password'
            },
            {
                Header: 'Status',
                accessor: 'status'
            },
          ],
          []
        );
      
        return (
          <Page title="">
            <ReactTable columns={columns} data={data} />
          </Page>
        );
      };

  return (
    <Page title="System Configuration Logs">
        <Grid container justifyContent="space-between" rowSpacing={4.5} columnSpacing={3} sx={{ mt: 0 }}>
            <Grid item>
                <Typography variant="h3">User List</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained">Add New</Button>
            </Grid>

            <Grid item xs={12}>
                <MainCard>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Agency</InputLabel>
                                <FormControl fullWidth>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                        <MenuItem value={1}>info</MenuItem>
                                        <MenuItem value={2}>Log type 2</MenuItem>
                                        <MenuItem value={3}>Log type 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Role</InputLabel>
                                <FormControl fullWidth>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                        <MenuItem value={1}>info</MenuItem>
                                        <MenuItem value={2}>Log type 2</MenuItem>
                                        <MenuItem value={3}>Log type 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Status</InputLabel>
                                <FormControl fullWidth>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                        <MenuItem value={1}>info</MenuItem>
                                        <MenuItem value={2}>Log type 2</MenuItem>
                                        <MenuItem value={3}>Log type 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end">
                        <Grid item>
                            <Button variant="outlined">Search</Button>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }}/>
                    <RowSelectionTable/>
                </MainCard>
            </Grid>
        </Grid>
    </Page>
  );
};

AdminUserList.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminUserList;
