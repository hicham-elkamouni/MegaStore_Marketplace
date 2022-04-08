import type { NextPage } from "next";
import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AlertColor } from "@mui/material";
import { useState } from "react";
import ButtonStandart from "@/components/front-office/buttonStandart";

const theme = createTheme();
const LoginForm: NextPage = () => {
  return (
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
          
          <div className="bg-white p-8 rounded-md shadow-2xl " >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="flex-col items-center justify-center"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                className="mb-6"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                className="mb-6"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div className="flex flex-col mb-6">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  className="mb-6"

                />
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-8 rounded-md text-lg"
                >
                  Sign in
                </button>
              </div>

              {/* spinner */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>

      </div>

  
  );
};
export default LoginForm;
