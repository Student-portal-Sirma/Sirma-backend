export default {
    routes: [
        {
            method: "GET",
            path: "/modules/:documentId/courses",
            handler: "module-courses-teachers.extended",
            config: {
                auth: {},
            },
        },
    ],
};
