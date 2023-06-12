import getData from "@/utils/getData";

const Home = async () => {
  const { lenden } = await getData();
  return (
    <div>
      <h1>
        You have{" "}
        {lenden.type === "gaining"
          ? `got $${lenden.amount} from`
          : `spent $${lenden.amount} to`}{" "}
        {lenden.title}{" "}
      </h1>
    </div>
  );
};

export default Home;
