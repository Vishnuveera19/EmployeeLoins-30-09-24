import React, { useState, useEffect } from 'react';
import { Grid, Card, TextField, Button, Typography, Box, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { CardContent } from '@material-ui/core';
import { PAYMBRANCHES, PAYMCATEGORY, PAYMCOMPANIES, REPORTS } from '../../serverconfiguration/controllers';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { postRequest } from '../../serverconfiguration/requestcomp';

const PaymCategoryForm = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [branches, setBranches] = useState([]);

  const validationSchema = yup.object({
    pnCompanyId: yup.string().required('Company ID is required'),
    pnBranchId: yup.string().required('Branch ID is required'),
    vCategoryName: yup
      .string()
      .max(40, 'Category Name should be at most 40 characters')
      .required('Category Name is required')
      .matches(/^[A-Za-z0-9\s]{1,40}$/, 'Category Name should contain 1 to 40 characters'),
    status: yup
      .string()
      .max(1, 'Status should be at most 1 character')
      .required('Status is required')
      .matches(/^[A-Za-z0-9]$/, 'Status should be a single alphanumeric character'),
  });

  const formik = useFormik({
    initialValues: {
      pnCompanyId: '',
      pnBranchId: '',
      vCategoryName: '',
      status: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const query = `
          INSERT INTO [dbo].[paym_Category] 
          ([pn_CompanyID], [BranchID], [v_CategoryName], [status])
          VALUES 
          ('${values.pnCompanyId}', '${values.pnBranchId}', '${values.vCategoryName}', '${values.status}') 
        `;

        const response = await postRequest(ServerConfig.url, REPORTS, { query });

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
              Paym Category
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
                  <FormControl fullWidth>
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
                    size="small"
                    name="vCategoryName"
                    label="vCategoryName"
                    variant="outlined"
                    fullWidth
                    required
                    value={formik.values.vCategoryName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.vCategoryName && Boolean(formik.errors.vCategoryName)}
                    helperText={formik.touched.vCategoryName && formik.errors.vCategoryName}
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

export default PaymCategoryForm;