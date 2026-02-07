export default {
    routes: [
        {
            method: "GET",
            path: "/courses/custom/teachers",
            handler: "courses-teachers.find",
            config: {
                auth: {},
            },
        },
    ],
};
