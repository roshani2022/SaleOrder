import React from "react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";
import { Box, Button, useColorMode, Icon, Flex } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function Root() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Navbar />
      <Box p={4}>
        <Flex justify="flex-end" align="center" mb={4}>
          <Button onClick={toggleColorMode}>
            <Icon as={colorMode === "light" ? SunIcon : MoonIcon} mr={4} />
          </Button>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
}

export default Root;
