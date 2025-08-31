import { fetchHeroes } from '@/data/api';

type HeroPageProps = {
  params: { id: string };
};


export default async function HeroPage({ params }: HeroPageProps) {
  const hero = (await fetchHeroes()).find((h) => h.id.toString() === params.id);

  if (!hero) {
    return <h2>Hero not found</h2>;
  }

  return (
    <div>
      <h1>{hero.name} - {hero.alias}</h1>
      <p>Powers: {hero.powers.join(', ')}</p>
    </div>
  );
}
