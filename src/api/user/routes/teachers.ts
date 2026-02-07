export default {
    routes: [
        {
            method: "GET",
            path: "/users/teachers",
            handler: "teachers.find",
            config: {
                auth: {},
            },
        },
    ],
};
