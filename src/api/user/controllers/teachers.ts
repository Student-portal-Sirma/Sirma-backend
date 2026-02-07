export default {
  async find(ctx: any) {
    const teachers = await strapi
      .documents('plugin::users-permissions.user')
      .findMany({
        filters: {
          role: {
            name: {
              $eq: 'Teacher',
            },
          },
        },
        fields: ['username', 'email'],
        populate: {
          role: {
            fields: ['name'],
          },
        },
      });

    ctx.body = teachers;
  },
};
