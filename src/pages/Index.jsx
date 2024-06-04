import { Box, Container, Flex, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaBoxes, FaChartBar, FaCog, FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" flexDirection="column">
        {/* Navigation Bar */}
        <Flex bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
          <Heading size="md">Hotel Inventory Management</Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Dashboard" icon={<FaHome />} />
            <IconButton aria-label="Inventory" icon={<FaBoxes />} />
            <IconButton aria-label="Reports" icon={<FaChartBar />} />
            <IconButton aria-label="Settings" icon={<FaCog />} />
          </HStack>
        </Flex>

        {/* Main Content */}
        <Flex flex="1" p={4} flexDirection={{ base: "column", md: "row" }}>
          {/* Summary Section */}
          <Box flex="1" p={4} bg="gray.100" borderRadius="md" m={2}>
            <Heading size="md" mb={4}>Inventory Status</Heading>
            <Text>Summary of current inventory levels...</Text>
          </Box>

          {/* Recent Activity Section */}
          <Box flex="1" p={4} bg="gray.100" borderRadius="md" m={2}>
            <Heading size="md" mb={4}>Recent Activity</Heading>
            <Text>List of recent inventory changes...</Text>
          </Box>

          {/* Quick Actions Section */}
          <Box flex="1" p={4} bg="gray.100" borderRadius="md" m={2}>
            <Heading size="md" mb={4}>Quick Actions</Heading>
            <Text>Buttons for quick inventory actions...</Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;