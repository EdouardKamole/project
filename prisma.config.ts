import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "postgresql://neondb_owner:npg_juXFOJdx14eD@ep-snowy-surf-a4c7pkbp-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});