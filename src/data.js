// Images live in public/images; paths are relative so the build works from any folder.
export const img = (name) => `./images/${name}`;

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#productions', label: 'Productions' },
  { href: '#events', label: 'Events' },
  { href: '#watch', label: 'Watch' },
  { href: '#community', label: 'Community' },
];

export const stats = [
  { value: 2, label: 'Countries — Sri Lanka & Australia' },
  { value: 1, label: 'Feature film in production' },
  { value: 1, label: 'In-house teledrama' },
  { value: 4, label: 'Live productions staged in Australia' },
];

export const shows = [
  {
    title: 'Swaranjana', si: 'ස්වරාංජනා', kind: 'Concert', date: '30 Aug 2026',
    img: img('swaranjana.jpg'), alt: 'Swaranjana concert poster',
    detail: 'A night of melodies that touch the heart, with Amarasiri Peiris and Nirosha Virajini.',
    venue: 'Tony Sheumack Centre of Performing Arts, Beaconhills College, Berwick Campus VIC',
  },
  {
    title: 'Sathsara Miyasiya', si: 'සත්සර මියැසිය', kind: 'Concert', date: '31 Jan 2026',
    img: img('sathsara-2026-poster.jpg'), alt: 'Sathsara Miyasiya concert poster',
    detail: 'Sathsara Miyasiya 2026, with music direction by Indrajith Mirihana. [Artist names]',
    venue: 'The Besen Centre, Burwood VIC',
  },
  {
    title: 'Wingfield Family', si: 'Tennessee Williams’s The Glass Menagerie', kind: 'Stage drama', date: '6 Jun 2025',
    img: img('wingfield.jpg'), alt: 'Wingfield Family stage drama poster',
    detail: 'Chandani Seneviratne as Amanda Wingfield. A play by Pujitha De Mel; Sinhala script by Dr Henry Jayasena.',
    venue: 'Brighton Performing Arts Centre, North Brighton SA',
  },
  {
    title: 'Nathuwama Bari Minihek', si: 'නැතුව බැරි මිනිහෙක් · A Man Much Needed', kind: 'Stage drama', date: '29 Sep 2024',
    img: img('nathuwama.jpg'), alt: 'Nathuwama Bari Minihek stage drama poster',
    detail: 'Rajitha Dissanayake’s Best Drama at the 2017 State Drama Festival, winner of 7 awards. Third Melbourne show.',
    venue: 'Cardinia Cultural Centre, Pakenham VIC',
  },
];

export const videos = [
  { title: 'Bimsara as Shanika — Natath Ayek Sura Mathin', sub: 'Teledrama · Cast interview', href: 'https://youtu.be/06Xm8l7nDbk', img: img('bimsara-interview.jpg') },
  { title: 'Sathsara Miyasiya — Melbourne', sub: 'Show highlights · A musical memory', href: 'https://youtu.be/0wW6uzgMlq0', img: img('sathsara-video.jpg') },
  { title: 'Wingfield Family — Melbourne Tour', sub: 'Show highlights · Stage drama', href: 'https://youtu.be/UCmNUQiTlZ4', img: img('wingfield-tour.jpg') },
  { title: 'Giving back', sub: 'Our CSR work · Venus Productions', href: 'https://youtu.be/uOrzzmzwm20', img: img('csr.jpg') },
];

export const YT_CHANNEL = 'https://www.youtube.com/@VenusProductionsMagic';
export const GIVING_BACK_VIDEO = 'https://youtu.be/uOrzzmzwm20';
export const TELEDRAMA_EP1 = 'https://www.youtube.com/watch?v=czyzGBj8cdQ';
export const TELEDRAMA_PLAYLIST = 'https://www.youtube.com/playlist?list=PLB-GuAsjHIZbuvSG1ia9F6DmEyeK0l5Yl';
export const FEATURED_VIDEO = 'https://www.youtube.com/watch?v=JSGLjOMCCyc&t=33s';
