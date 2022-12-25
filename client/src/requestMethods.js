import axios from "axios";

const BASE_URL = "https://agj-e-commerce.herokuapp.com/api/";

var TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzQ1YjFhNTAwNjQ0NWY5ZDRmYzE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTAxNTU5OSwiZXhwIjoxNjM1Mjc0Nzk5fQ.V4tp6rJbpw5yDajJqyjmXAxQvZAIijJXsg1xIyUBe04";
// =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//  .accessToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzQ1YjFhNTAwNjQ0NWY5ZDRmYzE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTAxNTU5OSwiZXhwIjoxNjM1Mjc0Nzk5fQ.V4tp6rJbpw5yDajJqyjmXAxQvZAIijJXsg1xIyUBe04" ;
// if ((JSON.parselocalStorage.getItem("persist:root").user.currentUser.accessToken === null)){
//   TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//   .accessToken;
// }
// else{
//   TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzQ1YjFhNTAwNjQ0NWY5ZDRmYzE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTAxNTU5OSwiZXhwIjoxNjM1Mjc0Nzk5fQ.V4tp6rJbpw5yDajJqyjmXAxQvZAIijJXsg1xIyUBe04"
// }
              // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
              // .accessToken || "";

 
// if (typeof(TOKEN) != 'undefined') {
//   const TOKEN =
//               JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//               .accessToken;
// }
// else {
//   const TOKEN =  "";
// }

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
