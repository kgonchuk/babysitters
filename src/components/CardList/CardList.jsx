import CardItem from "components/CardItem/CardItem";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { nanoid } from "nanoid";
import { BtrLoadMore, CardListContainer } from "./CardList.styled";

const CardList = ({ filterOption }) => {
  const [nannies, setNannies] = useState([]);
  const [visibleNanny, setVisibleNanny] = useState(3);

  useEffect(() => {
    const fetchNannies = async () => {
      try {
        const nannyRef = ref(db, "/");
        const snapshot = await get(nannyRef);

        console.log("Data:", snapshot.val());

        if (snapshot.exists()) {
          const nannyArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id: nanoid(),
              ...data,
            })
          );
          console.log(nannyArray);
          let filteredNanny = applyFilter(nannyArray, filterOption);

          setNannies(filteredNanny.slice(0, visibleNanny));
        } else {
          console.log("Помилка");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNannies();
  }, [filterOption, visibleNanny]);

  const handleLoadMore = () => {
    setVisibleNanny((prevVisibleNanny) => prevVisibleNanny + 3);
  };

  const applyFilter = (nannyArray, option) => {
    switch (option) {
      case "A to Z":
        return nannyArray.sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return nannyArray.sort((a, b) => b.name.localeCompare(a.name));
      case "Less than 10$":
        return nannyArray.filter((nanny) => nanny.price_per_hour <= 10);
      case "Greater than 10$":
        return nannyArray.filter((nanny) => nanny.price_per_hour >= 10);
      case "Popular":
        return nannyArray.sort((a, b) => b.rating - a.rating);
      case "Not popular":
        return nannyArray.sort((a, b) => a.rating - b.rating);
      case "Show all":
        return nannyArray;
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
