import {useState, ReactElement } from 'react';

// material-ui
import {Button, Grid, Typography, InputLabel, FormControl, MenuItem, Select, SelectChangeEvent, Stack, TextField} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const AdminCreateUser = () => {

    const [sysLogs, setLogs] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLogs(event.target.value as string);
    };

  return (
    <Page title="Entity List">
        <Grid container justifyContent="space-between" rowSpacing={4.5} columnSpacing={3} sx={{ mt: 0 }}>
            <Grid item>
                <Typography variant="h3">User / Creation</Typography>
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
                                        <MenuItem value={1}>Country 1</MenuItem>
                                        <MenuItem value={2}>Country 2</MenuItem>
                                        <MenuItem value={3}>Country 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>First Name</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Last Name*</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Designation</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Role</InputLabel>
                                <FormControl fullWidth>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                        <MenuItem value={1}>Role 1</MenuItem>
                                        <MenuItem value={2}>Role 2</MenuItem>
                                        <MenuItem value={3}>Role 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Email</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Mobile</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>User Name</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Password</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Confirm Password</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Admin Password</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Confirm Admin Password</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Status</InputLabel>
                                <FormControl fullWidth>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                        <MenuItem value={1}>Status 1</MenuItem>
                                        <MenuItem value={2}>Status 2</MenuItem>
                                        <MenuItem value={3}>Status 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ my: 4 }}>
                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                <Button type="submit" variant="contained">
                                    Save
                                </Button>
                                <Button color="error">
                                    Clear
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    
                </MainCard>
            </Grid>
        </Grid>
    </Page>
  );
};

AdminCreateUser.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminCreateUser;
