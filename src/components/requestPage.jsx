import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RequestRow = ({
  id,
  request,
  approversCount,
  campaignId,
  disabled,
  ETHPrice,
}) => {
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [loadingFinalize, setLoadingFinalize] = useState(false);

  const onApprove = () => {
    // Handle approve logic
  };

  const onFinalize = () => {
    // Handle finalize logic
  };

  const readyToFinalize = parseInt(request.approvalCount) > parseInt(approversCount) / 2;

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{request.description}</TableCell>
      <TableCell align="right">{request.value}</TableCell>
      <TableCell>
        {request.recipient.slice(0, 6)}...{request.recipient.slice(-4)}
      </TableCell>
      <TableCell align="center">
        {request.approvalCount}/{approversCount}
      </TableCell>
      <TableCell align="center">
        {request.complete ? (
          <CheckCircleIcon color="success" />
        ) : (
          <Typography variant="body2" color="textSecondary">
            Pending
          </Typography>
        )}
      </TableCell>
      <TableCell align="center">
        {!request.complete && (
          <>
            <Tooltip title="Approve">
              <IconButton
                disabled={disabled || loadingApprove}
                onClick={onApprove}
                size="small"
              >
                <CheckCircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Finalize">
              <IconButton
                disabled={disabled || loadingFinalize || !readyToFinalize}
                onClick={onFinalize}
                size="small"
              >
                <CheckCircleIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

const Requests = ({
  campaignId ="1",
  requestCount="20",
  approversCount="20",
  balance="100",
  name="abc",
  ETHPrice="0.1"
}) => {
  const [requests, setRequests] = useState([{
    description: "description",
    value: 100,
    recipient: "0x1234sdf",
    complete: false,
    approvalCount: 0
 },]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       setLoading(true);
//       try {
//         // Fetch requests data from API or contract
//         // Replace the following code with your own implementation
//         const response = await fetch('api/requests');
//         const data = await response.json();
//         setRequests(data.requests);
//       } catch (err) {
//         setErrorMessage(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [campaignId, requestCount]);

  return (
    <Box>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Button startIcon={<ArrowBackIcon />} variant="outlined">
          Back
        </Button>
        <Typography variant="h6" component="h1" marginLeft={2}>
          Requests
        </Typography>
      </Box>
      {errorMessage && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      {loading ? (
        <Typography variant="body2" color="textSecondary">
          Loading requests...
        </Typography>
      ) : (
        <>
          {requests.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              No requests found.
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount (ETH)</TableCell>
                    <TableCell>Recipient</TableCell>
                    <TableCell align="center">Approvals</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request, index) => (
                    <RequestRow
                      key={index}
                      id={index + 1}
                      request={request}
                      approversCount={approversCount}
                      campaignId={campaignId}
                      disabled={balance === 0}
                      ETHPrice={ETHPrice}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </Box>
  );
};

export default Requests;
