export default {
  async create(ctx: any) {
    const userId = ctx.state.user.id;
    const { courseId } = ctx.request.body;

    const existing = await strapi.db
      .query("api::enrollment.enrollment")
      .findOne({
        where: {
          user: userId,
          course: courseId,
        },
      });

    if (existing) {
      return ctx.badRequest("User is already enrolled in this course");
    }

    const enrollment = await strapi.db
      .query("api::enrollment.enrollment")
      .create({
        data: {
          user: userId,
          course: courseId,
          role: "student",
          enrollstatus: "pending",
        },
      });

    return enrollment;
  },
};
