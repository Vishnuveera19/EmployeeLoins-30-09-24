import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const attendanceData = [
  { date: '26 Jul 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '08:57', lastOut: '17:56', workHrs: '08:59', actualHrs: '08:27', status: 'P', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-' },
  { date: '27 Jul 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '09:09', lastOut: '17:44', workHrs: '08:35', actualHrs: '06:46', status: 'P', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-00:24' },
  { date: '28 Jul 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '00:00', lastOut: '00:00', workHrs: '00:00', actualHrs: '00:00', status: 'O', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-' },
  { date: '29 Jul 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '08:52', lastOut: '17:33', workHrs: '08:40', actualHrs: '08:07', status: 'P', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-00:19' },
  { date: '30 Jul 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '09:09', lastOut: '17:48', workHrs: '08:39', actualHrs: '07:56', status: 'P', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-00:20' },
  { date: '31 Jul 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '08:52', lastOut: '17:45', workHrs: '08:53', actualHrs: '08:16', status: 'P', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-00:06' },
  { date: '01 Aug 2024', shift: '08 (08:00 - 17:00)', attendanceScheme: '08:00 - 17:00', firstIn: '00:00', lastOut: '00:00', workHrs: '00:00', actualHrs: '00:00', status: '-', swipeDetails: 'Info', exception: 'No attention required', permissionDetails: 'Info', shortfallExcessHrs: '-' },
];

const AttendanceTable = () => (
  <TableContainer component={Paper}>
    <Typography variant="h6" gutterBottom component="div">
      Attendance Data
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Shift</TableCell>
          <TableCell>Attendance Scheme</TableCell>
          <TableCell>First In</TableCell>
          <TableCell>Last Out</TableCell>
          <TableCell>Work Hrs</TableCell>
          <TableCell>Actual Hrs</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Swipe Details</TableCell>
          <TableCell>Exception</TableCell>
          <TableCell>Permission Details</TableCell>
          <TableCell>Shortfall/Excess Hrs</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {attendanceData.map((row) => (
          <TableRow key={row.date}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.shift}</TableCell>
            <TableCell>{row.attendanceScheme}</TableCell>
            <TableCell>{row.firstIn}</TableCell>
            <TableCell>{row.lastOut}</TableCell>
            <TableCell>{row.workHrs}</TableCell>
            <TableCell>{row.actualHrs}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.swipeDetails}</TableCell>
            <TableCell>{row.exception}</TableCell>
            <TableCell>{row.permissionDetails}</TableCell>
            <TableCell>{row.shortfallExcessHrs}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AttendanceTable;
