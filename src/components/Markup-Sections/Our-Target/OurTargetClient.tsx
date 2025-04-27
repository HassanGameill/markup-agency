import OurTargetCard from "./OurTargetCard";
import GetOurTarget from "./GetOurTarget";
import Achievements from "../Achievements";

const OurTargetServer = async () => {
  const data = await GetOurTarget();
  const ourTargetData = data?.flatMap((item) => item.content || []) || [];

  return (
    <section className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-slate-900">
      <div className="container space-y-10">
        {ourTargetData.length > 0 ? (
          ourTargetData.map(
            (item) =>
              item.id && <OurTargetCard key={item.id} items={item} />
          )
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No target data available.
          </p>
        )}

        <Achievements />
      </div>
    </section>
  );
};

export default OurTargetServer;
