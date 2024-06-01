import React from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { addSaleOrder } from "../api/api";

const SaleOrderForm = ({ onClose }) => {
  
  const options = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
    { value: "product4", label: "Product 4" },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm();
  const queryClient = useQueryClient();

  const {mutate,isError,isLoading} = useMutation({
    mutationFn:addSaleOrder,
    onSuccess:()=>{
      queryClient.invalidateQueries({  
        queryKey: ["Orders"],  
      });
    }
  })

  

  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    return <p>Something went wrong...</p>
  }



  const onSubmit = (formData) => {
    mutate({formData})
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={errors.id}>
          <FormLabel>ID</FormLabel>
          <Input
            type="number"
            placeholder="id"
            id="id"
            {...register("id", {
              required: "id is required",
            })}
          />
          <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.id}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            placeholder="customer name"
            id="customer name"
            {...register("name", {
              required: "name is required",
            })}
          />
          <FormErrorMessage>{errors.id && errors.id.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.products}>
          <FormLabel>All Products</FormLabel>
          <Controller
            name="products"
            control={control}
            rules={{ required: "Products are required" }}
            render={({ field }) => (
              <Select
                isMulti
                options={options}
                id="multi"
                placeholder="Select products"
                {...field}
              />
            )}
          />
          <FormErrorMessage>
            {errors.products && errors.products.message}
          </FormErrorMessage>
        </FormControl>
        <Box>
          <Stack direction="row" spacing={4}>
            <FormControl isInvalid={errors.price}>
              <Input
                type="number"
                placeholder="Selling Rate"
                id="price"
                {...register("price", { required: "Selling Price is required" })}
              />
              <FormErrorMessage>
                {errors.price && errors.price.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.quantity}>
              <Input
                type="number"
                placeholder="Selling Quantity"
                id="quantity"
                {...register("quantity", {
                  required: "Selling Quantity is required",
                })}
              />
              <FormErrorMessage>
                {errors.quantity && errors.quantity.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
        </Box>
        <Box border="1px solid #E2E8F0" borderRadius="md" p={4}>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            border="1px solid #E2E8F0"
            borderRadius="md"
            p={2}
            justifyContent="space-between"
            mb={2}
          >
            <Box>
              <FormLabel>2. SKU (234kg)</FormLabel>
            </Box>
            <Box>Rate: ₹ 324</Box>
          </Stack>
          <Stack direction="row" spacing={4}>
            <FormControl isInvalid={errors.price}>
              <FormLabel>Selling Rate</FormLabel>
              <Input
                type="number"
                placeholder="Enter Selling Rate"
                id="rate"
                {...register("rate", { required: "Selling Rate is required" })}
              />
              <FormErrorMessage>
                {errors.price && errors.price.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.quantity}>
              <FormLabel>Total Item</FormLabel>
              <Input
                type="number"
                placeholder="Enter Quantity"
                id="total quantity"
                {...register("total quantity", {
                  required: "Total quantity is required",
                })}
              />
              <FormErrorMessage>
                {errors.quantity && errors.quantity.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
        </Box>
        <FormControl isInvalid={errors.invoiceDate}>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            {...register("Date", {
              required: " Date is required",
            })}
          />
          <FormErrorMessage>
            {errors.invoiceDate && errors.invoiceDate.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add Order
        </Button>
      </Stack>
    </form>
  );
};

export default SaleOrderForm;

