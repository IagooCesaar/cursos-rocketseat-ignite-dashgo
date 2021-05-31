import {
  Box,
} from "@chakra-ui/react";
import React from "react";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  return (
    <Box as='aside' w='64' mr='8' >
      <SidebarNav />
    </Box>
  )
}