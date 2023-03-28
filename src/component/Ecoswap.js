import React from "react";
import { Container, Typography, Box } from "@mui/material";
import suiLogo from "../images/sui-logo.png";

export default function Ecoswap() {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "4fr 2fr",
        columnGap: "10px",
        fontFamily: "Poppins",
        color: "#E7E7E7",
        m: "30px auto",
        textAlign: "center",
        
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(94.15deg, rgba(218, 79, 212, 0.73) -5.1% , #368DF2 131.63%)",
          border: "1px transparent",
          borderRadius: "12px",
          textAlign: "center",
          pl: "10",
          // 'text-indent': '24%',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
          }}
        >
          Ecoswap
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            //  'text-indent': '20%'
          }}
        >
          Swap, earn and build on the leading decentralized cryptocurrency
          protocol. Best NFTxDEFI on SUI
        </Typography>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(97.68deg, #6A85EB 4.26%, #1D348B 97.07%)",
          border: "1px transparent",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          p: '20px 0',
          pr: "60px",
        }}
      >
        <Typography sx={{
            textAlign: 'end'
        }}>
          <Typography>
            <img src={suiLogo} alt={suiLogo} />
            9,898.34
            <div
              style={{
                width: "260px",
                height: "0px",
                border: "1px solid #DEDEDE",
              }}
            ></div>
          </Typography>
          <Typography>24h volume</Typography>
        </Typography>
        <Typography sx={{
            textAlign: 'end'
        }}>
          <Typography>
            <img src={suiLogo} alt={suiLogo} />
            9,898.34
            <div
              style={{
                width: "260px",
                height: "0px",
                border: "1px solid #DEDEDE",
              }}
            ></div>
          </Typography>
          <Typography>24h volume</Typography>
        </Typography>
        <Typography sx={{
            textAlign: 'end'
        }}>
          <Typography>
            <img src={suiLogo} alt={suiLogo} />
            9,898.34
            <div
              style={{
                width: "260px",
                height: "0px",
                border: "1px solid #DEDEDE",
              }}
            ></div>
          </Typography>
          <Typography>24h volume</Typography>
        </Typography>
      </Box>
    </Container>
  );
}
