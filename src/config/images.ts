export const images = {
  hero: {
    main: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    team: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
    crane: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1200&q=80',
  },
  services: {
    construction: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    genieCivil: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    travauxPublics: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    vrd: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    terrassement: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    assainissement: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    rehabilitation: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    etudes: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  projects: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
  ],
  about: {
    team: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80',
    office: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80',
    site: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80',
  },
  blog: [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  ],
} as const;

export const projectImageMap: Record<string, string> = {
  'Construction': images.projects[0],
  'Travaux Publics': images.projects[1],
  'Génie Civil': images.projects[2],
  'VRD': images.projects[3],
  'Assainissement': images.projects[4],
  'Terrassement': images.projects[5],
  'Réhabilitation': images.projects[6],
};
