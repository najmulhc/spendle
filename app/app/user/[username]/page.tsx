"use client";
import AuthTester from "@/app/components/AuthTester";
import TransactionType from "@/app/components/user/TransactionType";

const Profile = async () => {
  const user = {
    username: "komola_shundori",
    account: {
      balence: 0,
      spent: 0,
      gained: 0,
    },
    spendingCategories: [],
    gainingCategories: [],
  };
  const submitSpendingType = async (values: any) => {
    const { gain } = values;
  };
  return (
    <AuthTester>
      <div>
        <h2>Hi, {user.username}</h2>
        <h4>You have ${user.account.balence} in your account</h4>
        <br />
        <h2>Spending</h2>
        <h5>You have spent ${user.account.spent}</h5>

        <TransactionType type="Gaining" />
      </div>
    </AuthTester>
  );
};

export default Profile;
