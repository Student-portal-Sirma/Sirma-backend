export default {
  async extended(ctx: any) {
    const { documentId } = ctx.params;

    const courses = await strapi.documents("api::course.course").findOne({
      documentId,
      fields: ["Title", "Description", "Level"],
      populate: {
        enrollments: {
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
