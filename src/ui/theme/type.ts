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

import React from "react"

import { TypographyOptions } from "@mui/material/styles/createTypography"

declare module "@mui/material/styles" {
   interface TypographyVariants {
      "display-small": React.CSSProperties
      "headline-medium": React.CSSProperties
      "body-large": React.CSSProperties
      "label-large": React.CSSProperties
      "label-medium": React.CSSProperties
   }

   // Allow style configuration in TypographyOptions
   interface TypographyVariantsOptions {
      "display-small"?: React.CSSProperties
      "headline-medium"?: React.CSSProperties
      "body-large"?: React.CSSProperties
      "label-large"?: React.CSSProperties
      "label-medium"?: React.CSSProperties
   }
}

// Update Typography's variant prop options
declare module "@mui/material/Typography" {
   interface TypographyPropsVariantOverrides {
      // Disable legacy m2 variants
      h1: false
      h2: false
      h3: false
      h4: false
      h5: false
      h6: false
      subtitle1: false
      subtitle2: false
      body1: false
      body2: false
      button: false
      caption: false
      overline: false

      // Enable m3 variants
      "display-small": true
      "headline-medium": true
      "body-large": true
      "label-large": true
      "label-medium": true
   }
}

const Typography: TypographyOptions = {
   // Remove legacy m2 typography styles
   h1: undefined,
   h2: undefined,
   h3: undefined,
   h4: undefined,
   h5: undefined,
   h6: undefined,
   subtitle1: undefined,
   subtitle2: undefined,
   body1: undefined,
   body2: undefined,
   button: undefined,
   caption: undefined,
   overline: undefined,

   // Add m3 typography styles
   "display-small": {
      fontFamily: "Roboto, Helvetica, Arial, san-serif",
      fontWeight: 400,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
   },
   "headline-medium": {
      fontFamily: "Roboto, Helvetica, Arial, san-serif",
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
   },
   "body-large": {
      fontFamily: "Roboto, Helvetica, Arial, san-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.03125rem",
   },
   "label-large": {
      fontFamily: "Roboto, Helvetica, Arial, san-serif",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.00625rem",
   },
   "label-medium": {
      fontFamily: "Roboto, Helvetica, Arial, san-serif",
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      letterSpacing: "0.03125rem",
   },
}

export default Typography
