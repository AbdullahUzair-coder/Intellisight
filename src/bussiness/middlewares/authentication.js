import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.accessToken;

  if (!token) {
    return res.status(403).json({ message: "Access token required" });
  }

  jwt.verify(token, "access_secret", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = decoded; // user data inside token
    next();
  });
};
