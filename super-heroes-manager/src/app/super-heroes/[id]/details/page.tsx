import { heroes } from '@/data/heroes';

type HeroPageProps = {
  params: { id: string };
};


export default function HeroPage({ params }: HeroPageProps) {
  const hero = heroes.find((h) => h.id.toString() === params.id);

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
