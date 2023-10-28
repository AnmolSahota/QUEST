// Task.js
import { Box, Checkbox, IconButton, Button, HStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Task = ({ task, onDelete, onToggle, onMoveToNextStage }) => {
  const handleMoveToNextStage = () => {
    onMoveToNextStage(task.id);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={3}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="sm"
      bgColor="white"
      w="100%"
    >
      <HStack spacing={2} flex="1">
        {/* <Checkbox
          isChecked={task.isComplete}
          onChange={() => onToggle(task.id)}
          flex="1"
        >
        </Checkbox> */}
        <Box>{task.text}</Box>
      </HStack>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <IconButton
          icon={<DeleteIcon />}
          colorScheme="red"
          size="sm"
          onClick={() => onDelete(task.id)}
        />
        <Button
          onClick={handleMoveToNextStage}
          colorScheme="teal"
          size="sm"
          borderRadius="md"
        >
          Done
        </Button>
      </Box>
    </Box>
  );
};

export default Task;
