
import React, { useState } from "react";
import { Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import SaleOrderForm from "../components/SaleOrderFrom";
import OrderList from "../components/OrderList";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
    <Stack direction="row" spacing={4} align="center" mt={14} mx={16}>
      <Button colorScheme="teal">Active Sale Orders</Button>
      <Button colorScheme="teal">Completed Sale Orders</Button>
      <div style={{ flex: 1 }}></div>
      <Button colorScheme="blue" leftIcon={<AddIcon />} onClick={handleModalOpen}>
        Sale Order
      </Button>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleOrderForm onClose={handleModalClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
    <OrderList />
    </>
  );
}

export default Home;
