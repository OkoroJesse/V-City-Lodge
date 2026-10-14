import { MetadataRoute } from "next";
import { hotelConfig } from "@/data/hotel-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vcitylodge.com";

  const staticRoutes = [
    "",
    "/rooms",
    "/experience",
    "/gallery",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-11"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const roomRoutes = hotelConfig.rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date("2026-10-11"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...roomRoutes];
}
