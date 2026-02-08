export default {
  routes: [
    {
      method: "GET",
      path: "/admin/users/all",
      handler: "all.find",
      config: {
        auth: {},
      },
    },
  ],
};
