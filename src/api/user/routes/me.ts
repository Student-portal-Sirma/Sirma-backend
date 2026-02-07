export default {
    routes: [
        {
            method: "GET",
            path: "/users/me/extended",
            handler: "me.extended",
            config: {
                auth: {},
            },
        },
    ],
};
