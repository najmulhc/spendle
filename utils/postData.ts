const postData = async (req: any) => {
  const response = await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...req,
    }),
  });
  const data = response.json();
  return data;
};

export default postData;
