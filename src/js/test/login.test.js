import { login } from "../api/auth/login.js";
import "jest-localstorage-mock";

//describe("")

test("it stores a token in local storage", async () => {
  const email = "sindbert99@stud.noroff.no";
  const pw = "12345678";

  await login(email, pw);

  expect(localStorage.getItem("token")).toBeTruthy();
});
