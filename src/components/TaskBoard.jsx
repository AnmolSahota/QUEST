// TodoList.js
import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import Task from "./Task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const updatedTasks = [
      ...tasks,
      { id: Date.now(), text: newTask, isComplete: false, stage: "Pending" },
    ];
    setTasks(updatedTasks);
    setNewTask("");
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const moveToNextStage = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        switch (task.stage) {
          case "Pending":
            return { ...task, stage: "In Progress" };
          case "In Progress":
            return { ...task, stage: "Completed" };
          default:
            return task;
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <VStack align="stretch" margin={"20px"}>
      <Box display="flex" alignItems="center" w="80%">
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          bg="gray.200"
          p="4"
          borderRadius="lg"
          flex="1" // Expand to fill available space
        />
        <Button
          onClick={addTask}
          colorScheme="teal"
          size="sm"
          borderRadius="lg"
          _hover={{ bg: "teal.600" }}
          ml="2" // Add some margin between the input and button
        >
          Add Task
        </Button>
      </Box>
      <Box display="flex" w="100%" justify="space-between" gap="30px">
        <Box
          w="33%"
          border="1px solid #e2e8f0"
          boxShadow="md"
          p={4}
          borderRadius="lg"
          minH="200px"
        >
          <Box sx={{ fontSize: "25px", fontWeight: "700" }}>TO-DO</Box>
          {tasks
            .filter((task) => task.stage === "Pending")
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
                onMoveToNextStage={moveToNextStage}
              />
            ))}
        </Box>
        <Box
          w="33%"
          border="1px solid #e2e8f0"
          boxShadow="md"
          p={4}
          borderRadius="lg"
          minH="200px"
        >
          <Box sx={{ fontSize: "25px", fontWeight: "700" }}>In Progress</Box>
          {tasks
            .filter((task) => task.stage === "In Progress")
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
                onMoveToNextStage={moveToNextStage}
              />
            ))}
        </Box>
        <Box
          w="33%"
          border="1px solid #e2e8f0"
          boxShadow="md"
          p={4}
          borderRadius="lg"
          minH="200px"
        >
          <Box sx={{ fontSize: "25px", fontWeight: "700" }}>Completed</Box>
          {tasks
            .filter((task) => task.stage === "Completed")
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
                onMoveToNextStage={moveToNextStage}
              />
            ))}
        </Box>
      </Box>
    </VStack>
  );
};

export default TodoList;
