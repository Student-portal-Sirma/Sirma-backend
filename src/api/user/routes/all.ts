export default {
    routes: [
        {
            method: "GET",
            path: "/users/all",
            handler: "all.find",
            config: {
                auth: {},
            },
        },
    ],
};
