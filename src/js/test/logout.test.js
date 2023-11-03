import { logout } from "../api/auth/logout.js";
import "jest-localstorage-mock";

test("it removes the token from local storage", () => {
  logout();
  expect(localStorage.getItem("token")).not.toBeTruthy();
});
