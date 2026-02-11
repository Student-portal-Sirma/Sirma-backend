export default {
    async extended(ctx: any) {
        const { documentId } = ctx.state.user;

        const user = await strapi
            .documents("plugin::users-permissions.user")
            .findOne({
                documentId,
                fields: ["username", "email"],
                populate: {
                    role: {
                        fields: ["name"],
                    },
                    enrollments: {
                        fields: ["role", "enrollstatus"],
                        populate: {
                            course: {
                                fields: ["title", "level"],
                            },
                        },
                    },
                },
            });

        ctx.body = user;
    },
};
