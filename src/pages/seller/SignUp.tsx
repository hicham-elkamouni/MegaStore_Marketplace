import type { NextPage } from "next";
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Input from "@mui/material/Input";

const theme = createTheme();
const SignUp: NextPage = () => {
  return (
    <div className="bg-gray-100  flex items-center justify-center min-h-screen">
      <div className="bg-white w-2/4 p-8 rounded-md shadow-2xl ">
        <Container component="main">
          <h1 className=" text-black text-2xl text-center">
            Sign up as a seller
          </h1>

          <Box
            component="form"
            className=" w-full flex flex-wrap items-center justify-between gap-1"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="name"
              label="Name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="prenom"
              label="Prenom"
              autoComplete="prenom"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12		"
              required
              fullWidth
              id="phone"
              label="Phone"
              autoComplete="phone"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="country"
              label="Country"
              autoComplete="country"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="city"
              label="City"
              autoComplete="city"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="address"
              label="Address"
              autoComplete="address"
              autoFocus
            />

            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="document"
              label="Name of store"
              autoComplete="document"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              className="mb-6 w-5/12"
              required
              fullWidth
              id="document"
              label="document"
              autoComplete="document"
              autoFocus
            />
            <div className="flex items-center justify-center">

              <p className="mr-6 ">Telecharger le document fiscale :</p>
              <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                  <input style={{ 'display': "none" }} type="file" accept="image/*" id="contained-button-file" />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Stack>
            </div>


            <div className="flex flex-col mb-6 w-full	">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                className="mb-6"
              />
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-8 rounded-md text-lg"
              >
                Sign Up
              </button>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
};
export default  SignUp ;
