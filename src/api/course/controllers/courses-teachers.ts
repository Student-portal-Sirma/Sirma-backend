export default {
  async find(ctx: any) {
    const courses = await strapi.documents("api::course.course").findMany({
      fields: ["Title", "Description", "Level"],
      populate: {
        enrollments: {
          filters: {
            role: {
              $eq: "teacher",
            },
          },
          populate: {
            user: {
              fields: ["username"],
            },
          },
        },
      },
    });

    ctx.body = courses;
  },
};
