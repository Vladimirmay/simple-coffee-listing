import { useEffect, useState } from "react";

interface CoffeeItems {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

export default function Card({ activeButton }: { activeButton: string }) {
  const [dataCoffee, setDataCoffee] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        setDataCoffee(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const filteredData = dataCoffee.filter(
    (item: CoffeeItems) => activeButton === "all" || item.available
  );

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-7 gap-y-16 pt-4 cursor-pointer">
      {filteredData.map((item: CoffeeItems) => {
        return (
          <div key={item.id} className="flex flex-col">
            <div className="relative">
              <img
                src={item.image}
                alt="image-coffee"
                className="rounded-xl mb-2"
              />
              {item.popular === true && (
                <p className="absolute top-2 left-2 bg-[#F6C768] rounded-xl text-xs font-bold py-1 px-2">
                  Popular
                </p>
              )}
            </div>
            <div className="flex justify-between pt-1">
              <p className="text-[#FEF7EE] font-medium">{item.name}</p>

              <p className="bg-[#BEE3CC] rounded font-bold text-xs px-2 pt-1">
                {item.price}
              </p>
            </div>
            <div className="flex justify-between pt-2">
              {item.rating !== null ? (
                <>
                  <div className="flex gap-x-1">
                    <img src="./Star_fill.svg" alt="star-fill" />
                    <p className="text-white font-bold">{item.rating}</p>
                    <p className="text-[#6F757C] font-bold">
                      ({item.votes} votes)
                    </p>
                  </div>
                  <div>
                    {item.available === false && (
                      <p className="text-[#ED735D] font-medium">Sold out</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-x-1">
                    <img src="./Star.svg" alt="star-fill" />
                    <p className="text-[#6F757C] font-medium">No rating</p>
                  </div>
                  <div>
                    {item.available === false && (
                      <p className="text-[#ED735D] font-medium">Sold out</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
