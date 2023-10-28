import { DOING, DONE, RESOURCES, TODO } from "../redux/type"

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

let initState = {
  data: [],
};

let reducer = (state = initState, action) => {
  const { type, payload } = action;
  // if(payload){
  // const { idx, data } = payload;
  // }
  // console.log(payload)

  switch (type) {
    case "FETCH":
      return { ...state, data: payload.data };

    case RESOURCES:
      return {
        ...state,
        data: [
          ...state.data,
          (state.data[payload?.idx].resources = payload?.data),
        ],
      };

    case TODO:
      return {
        ...state,
        data: [...state.data, (state.data[payload?.idx].todo = payload?.data)],
      };

    case DOING:
      return {
        ...state,
        data: [...state.data, (state.data[payload?.idx].doing = payload?.data)],
      };

    case DONE:
      return {
        ...state,
        data: [...state.data, (state.data[payload?.idx].done = payload?.data)],
      };

    case "NEWDATA": {
      let { data, name, boardIdx } = payload;

      let obj = {
        id: Date.now() + "-" + generateRandomString(5), // Using timestamp + random string
        name: name + "-" + generateRandomString(4), // Using name + random string
        description: data,
      };

      let newdata = state.data[boardIdx][name];
      newdata.push(obj);

      return { ...state, data: [...state.data, newdata] };
    }

    default:
      return state;
  }
};

export default reducer;
