export function formatArchiveDate(date: Date): string {
  return date
    .toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
    })
    .toUpperCase();
}

export function formatArticleDate(date: Date): string {
  return date
    .toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    .toUpperCase();
}

export function getYear(date: Date): string {
  return date.getFullYear().toString();
}

export interface ArchiveEntry {
  id: string;
  title: string;
  publishDate: Date;
  volume?: string;
}

export interface YearGroup {
  year: string;
  volume?: string;
  entries: ArchiveEntry[];
}

export function groupByYear(entries: ArchiveEntry[]): YearGroup[] {
  const sorted = [...entries].sort(
    (a, b) => b.publishDate.getTime() - a.publishDate.getTime(),
  );

  const groups = new Map<string, YearGroup>();

  for (const entry of sorted) {
    const year = getYear(entry.publishDate);
    const existing = groups.get(year);

    if (existing) {
      existing.entries.push(entry);
      if (!existing.volume && entry.volume) {
        existing.volume = entry.volume;
      }
    } else {
      groups.set(year, {
        year,
        volume: entry.volume,
        entries: [entry],
      });
    }
  }

  return Array.from(groups.values());
}
