import { onValue, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import { getNannies } from "../../redux/Nannies/nanniesSlice";

export const fetchNanny = () => (dispatch) => {
  const unsubscribe = onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    const nannyArray = Object.values(data);
    const nannyWithId = nannyArray.map((nanny) => ({
      ...nanny,
      id: nanny.name,
    }));

    dispatch(getNannies(nannyWithId));
  });

  return () => {
    unsubscribe();
  };
};
