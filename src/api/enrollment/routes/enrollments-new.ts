export default {
  routes: [
    {
      method: "POST",
      path: "/enrollments/custom",
      handler: "enrollments-new.create",
      config: { auth: {} },
    },
  ],
};
