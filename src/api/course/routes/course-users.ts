export default {
    routes: [
        {
            method: "GET",
            path: "/courses/:documentId/users",
            handler: "course-users.extended",
            config: {
                auth: {},
            },
        },
    ],
};
