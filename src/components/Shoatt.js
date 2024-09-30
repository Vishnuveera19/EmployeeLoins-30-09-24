import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import WorkIcon from '@mui/icons-material/Work';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import SecurityIcon from '@mui/icons-material/Security';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import TvIcon from '@mui/icons-material/Tv';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LegendItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
}));

const LegendIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  marginLeft: theme.spacing(1),
}));

const DayTypeItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DayTypeIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  marginRight: theme.spacing(1),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid #ccc',
  borderRadius: 4,
  padding: theme.spacing(2),
}));

export default function Legend() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledBox width={'600px'}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',backgroundColor:"#e6edf5" }}>
        <Typography variant="h6" gutterBottom sx={{}}> 
          Legends
        </Typography>
        <IconButton
          aria-label="expand"
          size="small"
          onClick={handleClick}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      {expanded && (
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
           
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <Typography sx={{ backgroundColor:"#ccffcc", mr: 1 ,padding:"5px 5px 5px 5px"}} >P
                    </Typography>
                  <Typography variant="body2">Present</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                <Typography sx={{ backgroundColor:"#ffcccc", mr: 1 ,padding:"5px 5px 5px 5px"}} >A
                </Typography>
                  <Typography variant="body2">Absent</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                <Typography sx={{ backgroundColor:"#ffffcc", mr: 1 ,padding:"5px 5px 5px 5px"}} >O
                </Typography>
                  <Typography variant="body2">Off Day</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                <Typography sx={{ backgroundColor:"#e6edf5", mr: 1 ,padding:"5px 5px 5px 5px"}} >R
                </Typography>                
                  <Typography variant="body2">Rest Day</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                <Typography sx={{ backgroundColor:"#5c617c", mr: 1 ,padding:"5px 5px 5px 5px" ,}} >L
                </Typography>      
                                  
                <Typography variant="body2">Leave</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                <Typography sx={{ backgroundColor:"#f3e47c", mr: 1 ,padding:"5px 5px 5px 5px"}} >OD
                </Typography> 
                  <Typography variant="body2">On Duty</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                <Typography sx={{ backgroundColor:"#BFB8BF", mr: 1 ,padding:"5px 5px 5px 5px"}} >H</Typography>
                  <Typography variant="body2">Holiday</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <QueryBuilderIcon sx={{ backgroundColor: '#FFD740', mr: 1 }} />
                  <Typography variant="body2">Alert for Deduction</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <LocalOfferIcon sx={{ color: '#F06292', mr: 1 }} />
                  <Typography variant="body2">Deduction</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <SecurityIcon sx={{ color: '#90A4AE', mr: 1 }} />
                  <Typography variant="body2">Status Unknown</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <AccessTimeIcon sx={{ color: '#424242', mr: 1 }} />
                  <Typography variant="body2">Overtime</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <EditIcon sx={{ color: '#FF9800', mr: 1 }} />
                  <Typography variant="body2">Override</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <CheckCircleOutlineIcon sx={{ color: '#00C853', mr: 1 }} />
                  <Typography variant="body2">Permission</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <CloseIcon sx={{ color: '#757575', mr: 1 }} />
                  <Typography variant="body2">Ignored</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <SettingsIcon sx={{ color: '#2196F3', mr: 1 }} />
                  <Typography variant="body2">Grace</Typography>
                </LegendItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <LegendItem>
                  <PowerSettingsNewIcon sx={{ color: '#FFA726', mr: 1 }} />
                  <Typography variant="body2">Regularized</Typography>
                </LegendItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={2} >
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
              Day Type
            </Typography>
            <Grid container spacing={3}  >
              <Grid item xs={6} md={2}>
                <DayTypeItem>
                  <DayTypeIcon sx={{ color: '#FF9800', mr: 1 }} />
                  <Typography variant="body2">Rest Day</Typography>
                </DayTypeItem>
              </Grid>
              <Grid item xs={6} md={2}>
                <DayTypeItem>
                  <DayTypeIcon sx={{ color: '#00C853', mr: 1 }} />
                  <Typography variant="body2">Off Day</Typography>
                </DayTypeItem>
              </Grid>
              <Grid item xs={6} md={2}>
                <DayTypeItem>
                  <DayTypeIcon sx={{ color: '#4CAF50', mr: 1 }} />
                  <Typography variant="body2">Holiday</Typography>
                </DayTypeItem>
                </Grid>
              <Grid item xs={6} md={3}>
                <DayTypeItem>
                  <DayTypeIcon sx={{ color: '#757575', mr: 1 }} />
                  <Typography variant="body2">Half Day</Typography>
                </DayTypeItem>
              </Grid>
              <Grid item xs={6} md={3}>
                <DayTypeItem>
                  <DayTypeIcon sx={{ color: '#F44336', mr: 1 }} />
                  <Typography variant="body2">Plant Shutdown</Typography>
                </DayTypeItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </StyledBox>
  );
}