import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSaleOrders } from "../api/api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";

const OrderList = () => {
  const {
    data: saleOrders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: fetchSaleOrders,
  });

  console.log(saleOrders);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading orders</div>;
  }
  if (!Array.isArray(saleOrders)) {
    return <div>Data is not an array</div>;
  }

  return (
    <Box display="flex" justifyContent="center" p={1}>
      <TableContainer border="1px" borderColor="gray.200" mt="10px">
        <Table variant="striped" colorScheme="teal" size="lg">
          <Thead>
            <Tr>
              <Th border="1px" borderColor="gray.300">
                ID
              </Th>
              <Th border="1px" borderColor="gray.300">
                Customer Name
              </Th>
              <Th border="1px" borderColor="gray.300">
                Price
              </Th>
              <Th border="1px" borderColor="gray.300">
                Last Modified
              </Th>
              <Th border="1px" borderColor="gray.300">
                Edit/View
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {saleOrders.map((order, index) => {
              const formData = order.formData ?? order; // Handle cases where formData is not present
              return (
                <Tr key={formData.id ?? index}>
                  <Td>{formData.id ?? order.customer_id}</Td>
                  <Td>{formData.name ?? "N/A"}</Td>
                  <Td>{formData.price ?? "N/A"}</Td>
                  <Td>{formData.Date ?? order.invoice_date}</Td>
                  <Td>
                    <Button>...</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderList;

