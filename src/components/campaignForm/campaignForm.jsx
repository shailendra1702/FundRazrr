import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";

import "./formpage.css";

function BlockchainFormPage() {
  const [formData, setFormData] = useState({
    minimumContribution: "",
    target: "",
    deadline: "",
    description: "",
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace the API_URL with the actual API endpoint
    const API_URL = "https://example.com/api/submit";

    // POST the form data to the API
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Display success toast message
          toast({
            title: "Form Submitted",
            description: "Your form has been successfully submitted.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          // Reset form data
          setFormData({
            minimumContribution: "",
            target: "",
            deadline: "",
            description: "",
          });
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error(error);
        // Display error toast message
        toast({
          title: "Error",
          description: "Failed to submit the form. Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="blockchain-form-container">
      <div className="blockchain-form-wrapper">
        <div className="blockchain-form-image">
          <img src="/images/bt.jpg" alt="Blockchain Image" />
        </div>
        <div className="blockchain-form-content">
          <h1 className="blockchain-form-heading">Blockchain Form</h1>
          <form className="blockchain-form" onSubmit={handleSubmit}>
            <FormControl className="blockchain-form-control" mb="15px" >
              <FormLabel>Minimum Contribution</FormLabel>
              <Input
                type="number"
                name="minimumContribution"
                value={formData.minimumContribution}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl className="blockchain-form-control" mb="15px">
              <FormLabel>Target</FormLabel>
              <Input
                type="number"
                name="target"
                value={formData.target}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl className="blockchain-form-control" mb="15px">
              <FormLabel>Deadline</FormLabel>
              <Input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl className="blockchain-form-control" mb="15px">
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="green" mt="20px">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlockchainFormPage;
