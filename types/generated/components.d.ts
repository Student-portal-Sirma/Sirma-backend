import type { Schema, Struct } from "@strapi/strapi";

export interface DocumentsDocs extends Struct.ComponentSchema {
    collectionName: "components_documents_docs";
    info: {
        displayName: "Docs";
        icon: "archive";
    };
    attributes: {};
}

declare module "@strapi/strapi" {
    export module Public {
        export interface ComponentSchemas {
            "documents.docs": DocumentsDocs;
        }
    }
}
