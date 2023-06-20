import AppNavbar from "@/app/components/navbars/AppNavbar";
import getUser from "@/app/services/getTransactions";
const Profile = async ({ params }: { params: any }) => {
  const { username } = params;
  const result = await getUser(username);
  const { status } = result;
  return (
    <main>
      <AppNavbar />

      {status === "success" ? (
        <h1>
          User exists and has {result.user.transactions.length} transactions
        </h1>
      ) : (
        <h2>User does not exists</h2>
      )}
    </main>
  );
};

export default Profile;
