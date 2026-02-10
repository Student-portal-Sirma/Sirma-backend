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
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: env("GMAIL_USER"),
                    pass: env("GMAIL_APP_PASSWORD"),
                },
            },
            settings: {
                defaultFrom: env("GMAIL_USER"),
                defaultReplyTo: env("GMAIL_USER"),
            },
        },
    },
});
