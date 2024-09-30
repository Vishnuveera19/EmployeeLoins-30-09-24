import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    CardContent,InputLabel,FormControl,
  } from '@mui/material';
  import {  FormHelperText,  MenuItem, Select } from '@mui/material';

import { PAYMLEVEL, REPORTS } from '../../serverconfiguration/controllers';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest,postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES} from '../../serverconfiguration/controllers';
import { useFormik } from 'formik';
import * as yup from 'yup';
  

  export default function LevelForm33() {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);
    const [branches, setBranches] = useState([]);

    const validationSchema = yup.object({
        pnCompanyId: yup.string().required('Company ID is required'),
        pnBranchId: yup.string().required('Branch ID is required'),
        vLevelName: yup
          .string()
          .max(40, 'Job Status Name should be at most 40 characters')
          .required('Job Status Name is required')
          .matches(/^[A-Za-z0-9\s]{1,40}$/, 'Job Status Name should contain 1 to 40 characters'),
        status: yup
          .string()
          .max(1, 'Status should be at most 1 character')
          .required('Status is required')
          .matches(/^[A-Za-z]$/, 'Status should be a single character'),
      });
    
      const formik = useFormik({
        initialValues: {
          pnCompanyId: '',
          pnBranchId: '',
          vLevelName: '',
          status: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          try {
            const query = `
            INSERT INTO [dbo].[paym_Level] 
            ([pn_CompanyID], [BranchID], [v_LevelName], [status])
            VALUES 
            ('${values.pnCompanyId}', '${values.pnBranchId}', '${values.vLevelName}', '${values.status}') 
          `;
    
            const response = await postRequest(ServerConfig.url, REPORTS     , { query });
    
            if (response.status === 200) {
              alert('Data saved successfully!');
              handleCancel(); // Optionally reset the form after submission
            } else {
              alert(`Unexpected response status: ${response.status}`);
            }
          } catch (error) {
            console.error('Error in postData:', error);
            alert(`Error: ${error.message || 'An unknown error occurred'}`);
          }
        },
      });
    
      const handleCancel = () => {
        formik.resetForm();
      };
    
      const fetchCompanies = async () => {
        try {
          const query = `
            SELECT [pn_CompanyID]
            FROM [dbo].[paym_Company]
          `;
    
          const response = await postRequest(ServerConfig.url, REPORTS, { query });
    
          if (response.status === 200) {
            console.log('Fetched companies:', response.data); // Add this line
            return response.data || [];
          } else {
            console.error(`Unexpected response status: ${response.status}`);
            return [];
          }
        } catch (error) {
          console.error('Error fetching companies data:', error);
          return [];
        }
      };
    
      useEffect(() => {
        async function getCompaniesData() {
          const data = await fetchCompanies();
          setCompanies(data);
        }
    
        getCompaniesData();
      }, []);
    
      const fetchBranches = async () => {
        try {
          const query = `
            SELECT [pn_BranchID]
            FROM [dbo].[paym_Branch]
          `;
    
          const response = await postRequest(ServerConfig.url, REPORTS, { query });
    
          if (response.status === 200) {
            console.log('Fetched branches:', response.data); // Add this line
            return response.data || [];
          } else {
            console.error(`Unexpected response status: ${response.status}`);
            return [];
          }
        } catch (error) {
          console.error('Error fetching branches data:', error);
          return [];
        }
      };
    
      useEffect(() => {
        async function getBranchesData() {
          const data = await fetchBranches();
          setBranches(data);
        }
    
        getBranchesData();
      }, []);
    
    
      return (
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="S- Light" align="center">
               Level Form
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                 
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth size="small">
                        <InputLabel id="company-id-select-label">Company ID</InputLabel>
                        <Select
                          labelId="company-id-select-label"
                          name="pnCompanyId"
                          value={formik.values.pnCompanyId}
                          onChange={formik.handleChange}
                          sx={{ height: 40 }}
                        >
                          <MenuItem value="">Select</MenuItem>
                          {companies.map((company) => (
                            <MenuItem key={company.pn_CompanyID} value={company.pn_CompanyID}>
                              {company.pn_CompanyID}
                            </MenuItem>
                          ))}
                        </Select>
                        {formik.touched.pnCompanyId && formik.errors.pnCompanyId && (
                          <FormHelperText sx={{ color: 'red' }}>
                            {formik.errors.pnCompanyId}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth size="small">
                        <InputLabel id="branch-id-select-label">Branch ID</InputLabel>
                        <Select
                          labelId="branch-id-select-label"
                          name="pnBranchId"
                          value={formik.values.pnBranchId}
                          onChange={formik.handleChange}
                          sx={{ height: 40 }}
                        >
                          <MenuItem value="">Select</MenuItem>
                          {branches.map((branch) => (
                            <MenuItem key={branch.pn_BranchID} value={branch.pn_BranchID}>
                              {branch.pn_BranchID}
                            </MenuItem>
                          ))}
                        </Select>
                        {formik.touched.pnBranchId && formik.errors.pnBranchId && (
                          <FormHelperText sx={{ color: 'red' }}>
                            {formik.errors.pnBranchId}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        size="small"
                        label="vLevelName"
                        name="vLevelName"
                        variant="outlined"
                        value={formik.values.vLevelName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.vLevelName && Boolean(formik.errors.vLevelName)}
                        helperText={formik.touched.vLevelName && formik.errors.vLevelName}
                        InputLabelProps={{ shrink: true }}
                    />
                    </Grid> 
                    <Grid item xs={12} sm={6}>
                      <TextField
                          size="small"
                          name="status"
                          label="status"
                          variant="outlined"
                          fullWidth
                          required
                          value={formik.values.status}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.status && Boolean(formik.errors.status)}
                          helperText={formik.touched.status && formik.errors.status}
                          InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Box mt={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} style={{ textAlign: 'right' }}>
                        <Box display="flex" justifyContent="flex-end">
                          <Button variant="contained" color="secondary" onClick={handleCancel} style={{ marginRight: '8px' }}>
                            Cancel
                          </Button>
                          <Button variant="contained" color="primary" type="submit">
                            Submit
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>  
             
                </form>
              </CardContent>    
            </Card>
          </Grid>
        </Grid>
      );
    };