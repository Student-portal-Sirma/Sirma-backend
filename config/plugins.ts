export default ({ env }) => ({
  documentation: {
    enabled: true,
    config: {
      defaultApiToken: null,
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "15m",
      },
      jwtManagement: "refresh",
      session: {
        enabled: true,
        secret: env("JWT_SECRET"),
        accessTokenLifespan: 15 * 60,
        refreshTokenLifespan: 7 * 24 * 60 * 60,
      },
    },
  },
});
