import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data, "github data");
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/snehasinha98")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img scr={data.avatar_urk} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/snehasinha98");
  console.log("git data", response.json);
  return response.json();
};
