import { MarkupStoreURL } from '@/lib/prismaDB/constains/constains';
import HeroCard from './HeroCard';

const HeroRender = async () => {
  try {
    const res = await fetch(`${MarkupStoreURL}/heros`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch hero data: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("DATA", data)

    return (
      <div>
        {data.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching hero data:", error);

    return <div className="text-red-500">Failed to load hero data.</div>;
  }
};

export default HeroRender;
