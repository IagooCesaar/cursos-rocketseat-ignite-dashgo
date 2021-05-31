import {
  Box,
  Drawer,
  useBreakpointValue,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={true} placement='left' onClose={() => { }} >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as='aside' w='64' mr='8' >
      <SidebarNav />
    </Box>
  )
}