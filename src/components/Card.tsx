import { useEffect, useState } from "react";

export default function Card() {
  const [dataCoffee, setDataCoffee] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        setDataCoffee(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      {/* {dataCoffee.map((item:) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })} */}
    </div>
  );
}
