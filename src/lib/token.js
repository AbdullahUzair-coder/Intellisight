import jwt from "jsonwebtoken";
import config from "../../config.js";

export function generateToken(payload, expiration) {
  return jwt.sign(payload, config.jwt.secret, { expiresIn: expiration });
}
const token = localStorage.getItem("accessToken");

const res = await fetch("/students", {
  headers: {
    "Authorization": `Bearer ${token}`
  }
});