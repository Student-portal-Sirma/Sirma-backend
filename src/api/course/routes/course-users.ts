export default {
  routes: [
    {
      method: "GET",
      path: "/admin/courses/:documentId/users",
      handler: "course-users.extended",
      config: {
        auth: {},
      },
    },
  ],
};
