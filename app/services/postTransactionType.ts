import TransactionType from "../components/user/TransactionType";

 
const postTransactionType = async ({type, text , username}:TransactionType) => {
 // fetch the data to the server using post method 
 const options = {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify({
     username, text, type
   }),
 };
 const response = await fetch("http://localhost:3000/api/users/transaction-type", options);
 const data = await response.json();
  return data.user;
};
export default postTransactionType;
