export default {
    jwt: {
      secret: process.env.ACCESS_TOKEN_SECRET || "secret", 
      accessTokenExpiration: "15m",
      refreshTokenExpiration: "7d",
    },
  };
  