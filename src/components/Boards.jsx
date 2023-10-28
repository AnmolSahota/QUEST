import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Cards from "./TaskBoard";

const Board = ({ data, boardIdx }) => {
  return (
    <Box
      className="board"
      border="1px solid #ccc"
      borderRadius="md"
      p={4}
      m={4}
      bg="white"
      boxShadow="lg"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Board Title
      </Text>
      <Flex justifyContent="space-between">
        <Cards
          data={data?.resources}
          drpId="resourcesList"
          name="Resources"
          boardIdx={boardIdx}
        />
        <Cards
          data={data?.todo}
          drpId="todoList"
          name="To Do"
          boardIdx={boardIdx}
        />
        <Cards
          data={data?.doing}
          drpId="doingList"
          name="In Progress"
          boardIdx={boardIdx}
        />
        <Cards
          data={data?.done}
          drpId="doneList"
          name="Done"
          boardIdx={boardIdx}
        />
      </Flex>
    </Box>
  );
};

export default Board;
