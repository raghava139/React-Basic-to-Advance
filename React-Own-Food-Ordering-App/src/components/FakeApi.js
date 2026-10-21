import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FakeApiThunk } from "../utils/FakeApiThunk";

const FakeApi = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.cart.fakeUsers);
  const { usersData, error, loading } = data;
  useEffect(() => {
    dispatch(FakeApiThunk({first:'raghavendra',second:'rajesh',third:'dinesh'}));
  }, []);
  console.log(error)
  if(error){
    return <p>{error.message}</p>
  }
  return (
    <div>
      <p>Usernames List:</p>
      {loading ? (
        <p>loading users data...</p>
      ) : (
        usersData?.map((d, index) => {
          return (
            <div key={d.id}>
              <p className="font-bold">{d?.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
export default FakeApi;
