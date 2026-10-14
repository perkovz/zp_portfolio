const localOnlyWorkSlugs = new Set([
  "decor-contractor",
  "ai-design-lab",
  "fairway-plus",
]);

export function isWorkProjectVisible(slug: string) {
  return process.env.NODE_ENV !== "production" || !localOnlyWorkSlugs.has(slug);
}
