// App.js
import { ChakraProvider } from '@chakra-ui/react';
import TodoList from './components/TaskBoard';

function App() {
  return (
    <ChakraProvider>
      <TodoList />
    </ChakraProvider>
  );
}

export default App;
