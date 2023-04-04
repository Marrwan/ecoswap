import React from "react";
import {  Typography, Grid, Box} from "@mui/material";
// import { styled } from '@mui/material/styles';
import suiLogo from "../images/sui-logo.png";

// export default function Ecoswap() {
// const Root = styled('div')(({theme})=>({
//     display: "grid",
//     gridTemplateColumns: "4fr 2fr",
//     // gridTemplateRows: "1fr 1fr",
//     columnGap: "10px",
//     fontFamily: "Poppins",
//     flexWrap: 'wrap',
//     color: "#E7E7E7",
//     width: "100%",
//     // m: "30px auto",
//     textAlign: "center",
//     [theme.breakpoints.down('xl')]:{
    
//     },
//     [theme.breakpoints.down('lg')]:{

//     },
//     [theme.breakpoints.down('md')]:{
//         // display: 'none',
        
//         gridTemplateColumns: '1fr',
//     gridTemplateRows: "1fr 1fr",
//     rowGap: '15px',
//     },
//     [theme.breakpoints.down('sm')]:{
//         // display: 'none',
//         gridTemplateColumns: '1fr',
//     gridTemplateRows: "1fr 1fr",
//     rowGap: '15px'
//     },
//     [theme.breakpoints.between('1px', '750px')]:{
//         display: 'none',
//     }

// }))
//   return (
//     <Container
//     fixed
//       sx={{
//         m: "30px auto",
//         width: "100vw",
//         textAlign: "center",
//       }}
//     >
//         <Root>
//       <Container
//         sx={{
//           background:
//             "linear-gradient(94.15deg, rgba(218, 79, 212, 0.73) -5.1% , #368DF2 131.63%)",
//           border: "1px transparent",
//           borderRadius: "12px",
//           textAlign: "center",
//           pl: "10",
//         //   width: "100%",
//           // 'text-indent': '24%',
//         }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             fontWeight: 600,
//           }}
//         >
//           Ecoswap
//         </Typography>
//         <Typography
//           sx={{
//             fontWeight: 400,
//             //  'text-indent': '20%'
//           }}
//         >
//           Swap, earn and build on the leading decentralized cryptocurrency
//           protocol. Best NFTxDEFI on SUI
//         </Typography>
//       </Container>
//       <Container
//         sx={{
//           background:
//             "linear-gradient(97.68deg, #6A85EB 4.26%, #1D348B 97.07%)",
//           border: "1px transparent",
//           borderRadius: "12px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "end",
//           p: '20px 0',
//           pr: "60px",
//         }}
//       >
//         <Typography sx={{
//             textAlign: 'end'
//         }}>
//           <Typography>
//             <img src={suiLogo} alt={suiLogo} />
//             9,898.34
//             <div
//               style={{
//                 width: "9em",
//                 height: "0px",
//                 border: "1px solid #DEDEDE",
//               }}
//             ></div>
//           </Typography>
//           <Typography>24h volume</Typography>
//         </Typography>
//         <Typography sx={{
//             textAlign: 'end'
//         }}>
//           <Typography>
//             <img src={suiLogo} alt={suiLogo} />
//             9,898.34
//             <div
//               style={{
//                 width: "260px",
//                 height: "0px",
//                 border: "1px solid #DEDEDE",
//               }}
//             ></div>
//           </Typography>
//           <Typography>24h volume</Typography>
//         </Typography>
//         <Typography sx={{
//             textAlign: 'end'
//         }}>
//           <Typography>
//             <img src={suiLogo} alt={suiLogo} />
//             9,898.34
//             <div
//               style={{
//                 width: "260px",
//                 height: "0px",
//                 border: "1px solid #DEDEDE",
//               }}
//             ></div>
//           </Typography>
//           <Typography>24h volume</Typography>
//         </Typography>
//       </Container>
//       </Root>
//     </Container>
//   );
// }
export default function Ecoswap() {

  return (
      <Box sx={{maxWidth: "100vw", flexGrow: 1}}>
    <Grid container
    direction="row"
    justifyContent= "space-between"
    // rowSpacing={1} columnSpacing={4}
      sx={{
        m: "30px 5px",
        textAlign: "center",
        flexWrap: 'wrap',
            color: "#E7E7E7",
    fontFamily: "Poppins",

      }}
    >
      <Grid
      item
      lg={8}
      md={8}
      sm={12}
      xs={12}
        sx={{
          background:
            "linear-gradient(94.15deg, rgba(218, 79, 212, 0.73) -5.1% , #368DF2 131.63%)",
          border: "1px transparent",
          borderRadius: "12px",
          textAlign: "center",
          p: {md: "20px 90px", xs: "10px 45px"},
          mb: {sm: "50px", xs: "30px"}
        //   width: "100%",
          // 'text-indent': '24%',
        }}
      >
        <Typography
          variant="h2"
          xs={12}
          sx={{
            fontWeight: 600,
            fontSize: {xs: '30px', sm: '96px'},
            textAlign: 'start',
            ml: {md :"40px", xs: "10px", sm: "40px"},
            overflowWrap: {md: 'break-word', xs: 'normal'},
            align:"center"
          }}
        >
          Ecoswap
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: 'start',
            width: {md: '50%', xs: "100%"}, 
            ml: {sm: "40px", xs: "10px"}
          }}
        >
            
          Swap, earn and build on the leading decentralized cryptocurrency
          protocol. Best NFTxDEFI on SUI
        </Typography>
      </Grid>


      <Grid
      item
      lg={3}
      md={3}
      sm={12}
      xs={12}
      
        sx={{
          background:
            "linear-gradient(97.68deg, #6A85EB 4.26%, #1D348B 97.07%)",
          border: "1px transparent",
          borderRadius: "12px",
          display: {md : "flex", sm: "none", xs: "none"},
          flexDirection: "column",
          alignItems: "end",
          p: '20px 0',
          mb: "50px",
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
                width: "9em",
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
                width: "9em",
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
          <Typography
          sx={{
              fontWeight: 400,
              lineHeight: "3px",
          }}
          >
            <img src={suiLogo} alt={suiLogo} />
            9,898.34
            <div
              style={{
                width: "9em",
                height: "0px",
                border: "0.1px solid #DEDEDE",
              }}
            ></div>
          </Typography>
          <Typography>24h volume</Typography>
        </Typography>
      </Grid>
    </Grid>
    </Box>
  );
}
