import { DOING, DONE, RESOURCES, TODO } from "../redux/type";

const boards = [
  {
    id: "board1",
    name: "board1",
    resources: [
      {
        id: "resource1",
        name: "resource1",
        description: "Finacials And Growth Data",
      },
      {
        id: "resource2",
        name: "resource2",
        description: "2017 Goals And KPI's",
      },
      {
        id: "resource3",
        name: "resource3",
        description: "Brand Guide",
      },
    ],
    todo: [
      {
        id: "todo1",
        name: "todo1",
        description: "Build A Better Burrito: 7 layers To Success",
      },
      {
        id: "todo2",
        name: "todo2",
        description: "Nacho Ordinary Birthday - Event Space Rentals",
      },
      {
        id: "todo3",
        name: "todo3",
        description: "Taco Drone Delivery Service",
      },
    ],
    doing: [
      {
        id: "doing1",
        name: "doing1",
        description: "The Taco Truck World Tour",
      },
      {
        id: "doing2",
        name: "doing2",
        description: "#NoFilter Instagram Campaign",
      },
      {
        id: "doing3",
        name: "doing3",
        description: "Globle Franchise Opportunities",
      },
    ],
    done: [
      {
        id: "done1",
        name: "done1",
        description: "Focus Group: Com vs. Flour Tortillas",
      },
      {
        id: "done2",
        name: "done2",
        description: "New Swag: Socks, Scarves & Salsa",
      },
      {
        id: "done3",
        name: "done3",
        description: "Update Yelp Listing",
      },
    ],
  },
  {
    id: "board2",
    name: "board2",
    resources: [
      {
        id: "resource1",
        name: "Resource 1",
        description: "Financial and sales data for Q3 2023",
      },
      {
        id: "resource2",
        name: "Resource 2",
        description: "Key performance indicators and goals for the year",
      },
      {
        id: "resource3",
        name: "Resource 3",
        description: "Guidelines for maintaining the company's brand",
      },
    ],
    todo: [
      {
        id: "todo1",
        name: "Todo 1",
        description:
          "Plan marketing strategies for the upcoming product launch",
      },
      {
        id: "todo2",
        name: "Todo 2",
        description: "Prepare financial reports for the board meeting",
      },
      {
        id: "todo3",
        name: "Todo 3",
        description: "Research and analyze customer feedback",
      },
    ],
    doing: [
      {
        id: "doing1",
        name: "Doing 1",
        description: "Execute the social media marketing campaign",
      },
      {
        id: "doing2",
        name: "Doing 2",
        description: "Develop a new feature for the company website",
      },
      {
        id: "doing3",
        name: "Doing 3",
        description: "Negotiate partnership agreements with vendors",
      },
    ],
    done: [
      {
        id: "done1",
        name: "Done 1",
        description: "Present financial performance to the board",
      },
      {
        id: "done2",
        name: "Done 2",
        description: "Launch the updated mobile app",
      },
      {
        id: "done3",
        name: "Done 3",
        description: "Publish the quarterly report",
      },
    ],
  },
];

export const getData = (dispatch) => {
  dispatch({ type: "FETCH", payload: { idx: 0, data: boards } });
};

export const updateResources = (boardIdx, add) => (dispatch) => {
  dispatch({ type: RESOURCES, payload: { idx: boardIdx, data: add } });
};
export const updateTodo = (boardIdx, add) => (dispatch) => {
  dispatch({ type: TODO, payload: { idx: boardIdx, data: add } });
};
export const updateDoing = (boardIdx, add) => (dispatch) => {
  dispatch({ type: DOING, payload: { idx: boardIdx, data: add } });
};
export const updateDone = (boardIdx, add) => (dispatch) => {
  dispatch({ type: DONE, payload: { idx: boardIdx, data: add } });
};

export const addNewData = (state, name, boardIdx) => (dispatch) => {
  let payload = {
    data: state,
    name,
    boardIdx,
  };
  dispatch({ type: "NEWDATA", payload });
};
