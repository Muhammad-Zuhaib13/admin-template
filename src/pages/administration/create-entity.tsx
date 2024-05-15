import {useState, ReactElement } from 'react';

// material-ui
import {Button, Grid, Typography, InputLabel, FormControl, MenuItem, Select, SelectChangeEvent, Stack, TextField, FormHelperText} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import UploadAvatar from 'components/third-party/dropzone/Avatar';

// third Party
import { Formik } from 'formik';
import * as yup from 'yup';




// ==============================|| DASHBOARD - ANALYTICS ||============================== //

const AdminCreateEntity = () => {

    const [sysLogs, setLogs] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLogs(event.target.value as string);
    };

  return (
    <Page title="Entity List">
        <Grid container justifyContent="space-between" rowSpacing={4.5} columnSpacing={3} sx={{ mt: 0 }}>
            <Grid item>
                <Typography variant="h3">Agency Creation</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained">Add New</Button>
            </Grid>

            <Grid item xs={12}>
                <MainCard>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <Stack spacing={0.5}>
                                        <InputLabel>Agency Code</InputLabel>
                                        <TextField fullWidth placeholder="0"/>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Stack spacing={0.5}>
                                        <InputLabel>Agency Name</InputLabel>
                                        <TextField fullWidth placeholder="0"/>  
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Stack spacing={0.5}>
                                        <InputLabel>Agency Level</InputLabel>
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
                                        <InputLabel>Agency Parent</InputLabel>
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
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Typography variant="h4">Related Links</Typography>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <Stack spacing={0.5}>
                                        <FormControl fullWidth>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                                <MenuItem value={1}>info</MenuItem>
                                                <MenuItem value={2}>Log type 2</MenuItem>
                                                <MenuItem value={3}>Log type 3</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <Stack spacing={0.5}>
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
                        </Grid>
                    </Grid>
                    <Grid container sx={{my: 5}}>
                        <Grid item>
                            <Typography variant="h4">Agency Contact Details</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Address</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>City</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>State</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Country</InputLabel>
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
                                <InputLabel>Zip/Pin</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Agency Phone</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Agency Mobile</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Agency Email</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container sx={{my: 5}}>
                        <Grid item>
                            <Typography variant="h4">Other Details</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Prefix Code</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Sales Person</InputLabel>
                                <FormControl fullWidth>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={sysLogs} placeholder="Logs" onChange={handleChange}>
                                        <MenuItem value={1}>Country 1</MenuItem>
                                        <MenuItem value={2}>Country 2</MenuItem>
                                        <MenuItem value={3}>Country 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container sx={{my: 5}}>
                        <Grid item>
                            <Typography variant="h4">GST Details</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>GST Number</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Name</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Address</InputLabel>
                                <TextField fullWidth placeholder="0"/>
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
                                <InputLabel>Phone</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>State</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>Panholder Name</InputLabel>
                                <TextField fullWidth placeholder="0"/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={0.5}>
                                <InputLabel>PanNumber</InputLabel>
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
                        <Grid item xs={12}>
                            <MainCard title="Upload Avatar">
                                <Formik
                                initialValues={{ files: null }}
                                onSubmit={(values: any) => {
                                    // submit form
                                }}
                                validationSchema={yup.object().shape({
                                    files: yup.mixed().required('Avatar is a required.')
                                })}
                                >
                                {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                                <Stack spacing={1.5} alignItems="center">
                                                    <UploadAvatar setFieldValue={setFieldValue} file={values.files} error={touched.files && !!errors.files} />
                                                    {touched.files && errors.files && (
                                                    <FormHelperText error id="standard-weight-helper-text-password-login">
                                                        {errors.files}
                                                    </FormHelperText>
                                                    )}
                                                    <Stack spacing={0}>
                                                        <Typography align="center" variant="caption" color="secondary">
                                                            Allowed &lsquo;image/*&rsquo;
                                                        </Typography>
                                                        <Typography align="center" variant="caption" color="secondary">
                                                            *.png, *.jpeg, *.jpg, *.gif
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                                                    <Button color="error" onClick={() => setFieldValue('files', null)}>
                                                        Clear
                                                    </Button>
                                                    <Button type="submit" variant="contained">
                                                        Save
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </form>
                                )}
                                </Formik>
                            </MainCard>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    </Page>
  );
};

AdminCreateEntity.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AdminCreateEntity;
