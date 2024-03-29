import React from "react";

import { HStack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../app/features/cartSlice";

export default function ModalBox() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { total } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const toast = useToast();

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate("/");
    toast({
      title: "Payment Successfully",
      description: "We are very delightful to choosing us",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button
        maxW="fit-content"
        colorScheme="blue"
        variant="ghost"
        marginX="auto"
        marginY="10px"
        onClick={onOpen}
      >
        CheckOut
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW="90%">
          <ModalHeader textAlign="center">
            Thank u for choosing us !
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder="Enter ur name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Enter ur address" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contact Number</FormLabel>
              <Input accept="number" placeholder="Enter ur phone number" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <HStack justifyContent="space-between" width="100%">
              <Text>Total Amount : $ {total}</Text>
              <HStack>
                <Button colorScheme="blue" mr={3} onClick={handleCheckout}>
                  Pay
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </HStack>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
