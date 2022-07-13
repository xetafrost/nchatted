/*
 * Copyright (c) 2022 Xetafrost
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "./app.scss"

import GitHubIcon from "@mui/icons-material/GitHub"
import appTheme from "./ui/theme"
import logo from "./assets/logo.svg"

import { Box, Button, Divider, Stack, styled, ThemeProvider, Typography } from "@mui/material"
import { backgroundLight, onBackgroundLight, primaryLight } from "./ui/theme/color"

/**
 * Adds opacity to a color.
 *
 * @param color The hex color code.
 * @param alpha The opacity value.
 * @returns The hex color code with opacity.
 */
function addOpacity(color: String, alpha: number) {
   const opacity = Math.round(Math.min(Math.max(alpha || 1, 0), 1) * 255)
   return color + opacity.toString(16).toUpperCase()
}

const CTAButton = styled(Button)({
   textTransform: "none",
   color: primaryLight,
   padding: "10px 24px 10px 16px",
   borderRadius: "8px",
   borderColor: addOpacity(primaryLight, 0.5),
   "&:hover": {
      borderColor: primaryLight,
   },
}) as typeof Button

function App() {
   return (
      <ThemeProvider theme={appTheme}>
         <Box
            minHeight="100vh"
            paddingX="32px"
            display="flex"
            flexDirection="column"
            bgcolor={backgroundLight}
            color={onBackgroundLight}>
            <Stack
               flexGrow="1"
               paddingY="64px"
               justifyContent="center"
               alignItems="center"
               spacing="32px">
               <img src={logo} className="logo" alt="logo" />
               <Typography variant="headline-medium">Nchatted</Typography>
               <Typography variant="body-large" textAlign="center">
                  A peer-to-peer private messaging platform
               </Typography>
               <Divider sx={{ width: "200px" }} />
               <Typography variant="display-small">Coming Soon</Typography>
               <CTAButton
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  onClick={() => {
                     window.open("https://github.com/xetafrost/nchatted", "_self")
                  }}>
                  <Typography variant="label-large">View source on GitHub</Typography>
               </CTAButton>
            </Stack>
            <Typography variant="label-medium" textAlign="center" mb="16px">
               Copyright &copy; 2022 Xetafrost
            </Typography>
         </Box>
      </ThemeProvider>
   )
}

export default App
