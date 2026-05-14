export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  image?: string;
}

export const education: Education[] = [
  {
    degree: 'Master\'s Degree in Software Engineering and Information Systems Management',
    institution: 'ENSA Kénitra',
    location: 'Kénitra',
    duration: '2025 - 2027',
    image: '/image.png'
  },
  {
    degree: 'Software Engineering',
    institution: 'UM6P (YouCode)',
    location: 'Safi',
    duration: '2023 - 2025',
    image: '/um6p.png'
  },
  {
    degree: 'Bachelor\'s Degree in Computer Science',
    institution: 'FST Settat (Hassan 1st University)',
    location: 'Settat',
    duration: '2019 - 2023',
    image: '/fst.png'
  }
];