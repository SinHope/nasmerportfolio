import glob from 'fast-glob'

async function loadEntries(directory, metaName) {
  const entries = await Promise.all(
    (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
      async (filename) => {
        let metadata = (await import(`../app/${directory}/${filename}`))[metaName];
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
        };
      },
    ),
  );
  
  return entries.sort((a, b) => {
    const dateA = a.date || "0000-00-00"; // Assign a minimum date if `date` is falsy
    const dateB = b.date || "0000-00-00"; // This ensures comparison is always between strings
    return dateB.localeCompare(dateA);
  });
}

export function loadArticles() {
  return loadEntries('blog', 'article');
}

export function loadCaseStudies() {
  return loadEntries('work', 'caseStudy');
}
