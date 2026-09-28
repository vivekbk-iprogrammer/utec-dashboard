export function matchesQuery(query, isHomePage, ...fields) {
  const normalized = query.trim().toLowerCase();

  if (!normalized && isHomePage) {
    return isHomePage;
  }

  return fields.some((field) => String(field ?? '').toLowerCase().includes(normalized));
}
