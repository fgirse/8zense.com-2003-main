import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/gallery",
    "/contact",
    "/api/uploadthing",
    "/api/webhook/clerk",
  ],
  ignoredRoutes: ["/api/uploadthing", "/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
