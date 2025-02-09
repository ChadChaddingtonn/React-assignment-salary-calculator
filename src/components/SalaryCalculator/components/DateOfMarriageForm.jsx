import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Container } from "semantic-ui-react";

/* eslint-disable react/prop-types */
export function DateOfMarriageForm({ open, handleClose, handleSuccess }) {
  const [data, setData] = useState();

  const handleInput = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSuccess(data);
    handleClose();
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit}>
          <ModalHeader margin={"0"} paddingBottom={"0.3rem"}>
            <Text opacity={"0.6"} fontSize={"0.8rem"}>
              A kedvezmény először a házasságkötést követő hónapra vehető
              igénybe és a házassági életközösség alatt legfeljebb 24 hónapon
              keresztül jár
            </Text>
          </ModalHeader>
          <ModalBody>
            <label className="marriage-date-label">
              Add meg a házasság kötés dátumát:
            </label>
            <Input
              margin={"0.2rem 0 0.2rem 0"}
              onChange={handleInput}
              placeholder="YYYY/MM/DD"
            />
            <Text opacity="0.5" fontSize={"0.8rem"}>
              Például: 2023/12/31
            </Text>
          </ModalBody>
          <ModalFooter>
            <Container textAlign="left">
              <Button
                type="submit"
                bgColor="#0f172a"
                color="white"
                padding="0.5rem 0.8rem 0.5rem 0.8rem"
                borderRadius="0.4rem"
              >
                Mentés
              </Button>
            </Container>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
