import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Button, Grid, Avatar } from '@mui/material';
import { Skeleton} from '@mui/material';
import { Divider } from '@mui/material';
import { Icon } from '@mui/material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Link } from '@mui/material';
import OpenInNewIcon  from '@mui/icons-material/OpenInNew';
import { Stack, Flex, useTheme, Box } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import CampaignPaper from './card';
import { bgcolor } from '@mui/system';


const Feature = ({ title, text, icon }) => {
    const theme = useTheme();
    return (
      <Stack>
        <Stack
          width={16}
          height={16}
          alignItems="center"
          justifyContent="center"
          color="white"
          borderRadius="full"
          backgroundColor = {theme.palette.mode === "light" ? 'white' : '#424242'}
          marginBottom={1}
        >
          {icon}
        </Stack>
        <Typography fontWeight={600} variant="body1">{title}</Typography>
        <Typography color={theme.palette.mode === "light" ? '#f5f5f5' : '#616161'} variant="body2">{text}</Typography>
      </Stack>
    );
  };

export default function Home() {
  const [campaignList, setCampaignList] = useState([]);
  const [ethPrice, updateEthPrice] = useState(null);

  async function getSummary() {
    try {
    //   const summary = await Promise.all(
    //     campaigns.map((campaign, i) =>
    //       Campaign(campaigns[i]).methods.getSummary().call()
    //     )
    //    );
        const summary = ["C1","C2","C3"];
    
    //   const ETHPrice = await getETHPrice();
      updateEthPrice(123);
      console.log("summary ", summary);
      setCampaignList(summary);

      return summary;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSummary();
  }, []);

  return (
    <Container>
      {/* <Helmet>
        <title>BetterFund</title>
        <meta
          name="description"
          content="Transparent Crowdfunding in Blockchain"
        />
        <link rel="icon" href="/logo.svg" />
      </Helmet> */}
    
        <Container py={{ base: 4, md: 12 }} maxWidth="xl" align="left">
          <Typography
            textAlign="left"
            fontFamily="heading"
            color="gray.800"
            variant="h1"
            component="h1"
            py={4}
          >
            Crowdfunding using the powers of <br /> Crypto & Blockchain 😄
          </Typography>
          <Box mb={2}>
          <Button variant='contained' sx = {{backgroundColor: 'darkgray' ,fontWeight: 600, fontSize: 'md','&:hover': {
                bgcolor: '#4db6ac',
              }, }} >
            Create Campaign
          </Button>
          </Box>
          
        </Container>
        <Container py={{ base: 2, md: 6 }} maxWidth="xl">
          <Grid container alignItems="center" spacing={2}>
            <Avatar sx={{ bgcolor: '#4caf50' , width: 24, height: 24 }}>
             <AssignmentIcon />
            </Avatar>
            <Typography variant="h2" component="h2" fontSize="lg">
              Open Campaigns
            </Typography>
          </Grid>

          <Divider marginTop={2} />

          {campaignList.length > 0 ? (
            <Grid columns={{ base: 1, md: 3 }} spacing={10} py={4}>
              {campaignList.map((el, i) => (
                <CampaignPaper
                  // key={i}
                  // name="{el[5]}"
                  // description={el[6]}
                  // creatorId={el[4]}
                  // imageURL={el[7]}
                  // id={campaigns[i]}
                  // target={el[8]}
                  // balance={el[1]}
                  // ethPrice={ethPrice}
                />
              ))}
            </Grid>
          ) : (
            <Grid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
              <Skeleton height="25rem" />
              <Skeleton height="25rem" />
              <Skeleton height="25rem" />
            </Grid>
          )}
        </Container>
        <Container py={{ base: 4, md: 12 }} maxWidth="7xl" id="howitworks">
          <Grid container alignItems="center" spacing={2}>
            <Skeleton variant = "circular" sx={{ width: 4, height: 4 }} />
            <Typography variant="h2" component="h2" fontSize="lg">
              How BetterFund Works
            </Typography>
          </Grid>
          <Divider marginTop={2} />
          <Grid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
            <Feature
              icon={<Icon as={MonetizationOnOutlinedIcon} sx={{ width: 10, height: 10 }} />}
              title="Create a Campaign for Fundraising"
              text="It’ll take only 2 minutes. Just enter a few details about the funds you are raising for."
            />
            <Feature
              icon={<Icon as={ShareOutlinedIcon} sx={{ width: 10, height: 10 }} />}
              title="Share your Campaign"
              text="All you need to do is share the Campaign with your friends, family and others. In no time, support will start pouring in."
            />
            <Feature
              icon={<Icon as={AttachMoneyOutlinedIcon} sx={{ width: 10, height: 10 }} />}
              title="Request and Withdraw Funds"
              text="The funds raised can be withdrawn directly to the recipient when 50% of the contributors approve of the Withdrawal Request."
            />
          </Grid>
          <Typography variant="h2" component="h2" fontSize="lg" mt={8}>
            For any queries raise an issue on{' '}
            <Link
              color="#009688"
              href="https://github.com/harsh242/betterfund-crowdfunding-in-blockchain/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Github Repo <OpenInNewIcon sx={{ verticalAlign: 'middle', ml: '2px' }} />
            </Link>
          </Typography>
          <Divider marginTop={4} />
        </Container>
    </Container>
  );
}
