export interface Planet {
  title: string;
  description: string;
  distanceFromSun: string;
  image: string;
  dir: string;
  path: string;
  slug: string;
  updatedAt: string;
}

const planets = [{} as Planet];

planets.push({
  title: '',
  description: '',
  distanceFromSun: '',
  image: '',
  dir: '',
  path: '',
  slug: '',
  updatedAt: '',
});

planets.push({
  title: '',
  description: '',
  distanceFromSun: '',
  image: '',
  dir: '',
  path: '',
  slug: '',
  updatedAt: '',
});

console.log(planets);
