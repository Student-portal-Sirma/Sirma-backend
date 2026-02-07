export default {
    async find(ctx: any) {
        const users = await strapi
            .documents("plugin::users-permissions.user")
            .findMany({
                fields: ["username", "email"],
                populate: {
                    role: {
                        fields: ["name"],
                    },
                },
            });

        ctx.body = users;
    },
};
