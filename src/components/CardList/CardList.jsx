import CardItem from "components/CardItem/CardItem";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { nanoid } from "nanoid";
import { BtrLoadMore, CardListContainer } from "./CardLisr.styled";

const CardList = ({ filterOption }) => {
  const [nannies, setNannies] = useState([]);
  const [visiblePsycho, setVisiblePsycho] = useState(3);

  useEffect(() => {
    const fetchPsycho = async () => {
      try {
        const psychosRef = ref(db, "/");
        const snapshot = await get(psychosRef);

        console.log("Data:", snapshot.val());

        if (snapshot.exists()) {
          const nannyArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id: nanoid(),
              ...data,
            })
          );
          console.log(nannyArray);
          let filteredPsycho = applyFilter(nannyArray, filterOption);

          setNannies(filteredPsycho.slice(0, visiblePsycho));
        } else {
          console.log("Помилка");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPsycho();
  }, [filterOption, visiblePsycho]);
  const handleLoadMore = () => {
    setVisiblePsycho((prevVisiblePsycho) => prevVisiblePsycho + 3);
  };

  const applyFilter = (nannyArray, option) => {
    switch (option) {
      case "A to Z":
        return nannyArray.sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return nannyArray.sort((a, b) => b.name.localeCompare(a.name));
      case "Less than 10$":
        return nannyArray.filter((nanny) => nanny.price_per_hour < 10);
      case "Greater than 10$":
        return nannyArray.filter((nanny) => nanny.price_per_hour > 10);
      case "Popular":
        return nannyArray.filter((nanny) => nanny.rating > 4);
      case "Non popular":
        return nannyArray.filter((nanny) => nanny.rating <= 4);
      default:
        return nannyArray;
    }
  };

  return (
    <CardListContainer>
      <ul>
        {nannies.map((nanny) => (
          <CardItem key={nanny.id} nanny={nanny} />
        ))}
      </ul>
      {nannies.length >= 3 && nannies.length < 28 && (
        <BtrLoadMore onClick={handleLoadMore}>Load more</BtrLoadMore>
      )}
    </CardListContainer>
  );
};
export default CardList;
