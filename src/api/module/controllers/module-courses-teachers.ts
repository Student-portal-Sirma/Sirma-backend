export default {
    async extended(ctx: any) {
        const { documentId } = ctx.params;

        const module = await strapi.documents("api::module.module").findOne({
            documentId,
            fields: ["Title", "Description"],
            populate: {
                courses: {
                    fields: ["Title", "Description", "Level", "isPublished"],
                    populate: {
                        enrollments: {
                            filters: { role: "teacher" },
                            fields: ["role", "enrollstatus"],
                            populate: {
                                user: {
                                    fields: ["username"],
                                },
                            },
                        },
                    },
                },
            },
        });

        ctx.body = module;
    },
};
