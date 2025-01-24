export default function Grid({ data }) {
  const list = data;

  return (
      <div className="grid grid-cols-2 gap-6 p-6 justify-self-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((li) => (
              <div key={li.id} className="bg-gray-100 w-full p-4 rounded-lg flex flex-col items-center">
                  <img src={`https://image.tmdb.org/t/p/w500${li.poster}`} alt={li.title} className="w-full h-auto aspect-[2/3] object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-bold">{li.title}</h3>
                  <p className="text-yellow-500">⭐ {li.rating.toFixed()} / 10</p>
              </div>
          ))}
      </div>
  );
};
