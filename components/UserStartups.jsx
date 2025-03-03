import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "./../sanity/lib/queries";
import StartupCard from "./StartupCard";

const UserStartups = ({ id }) => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    const fetchStartups = async () => {
      const result = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
      setStartups(result);
    };

    fetchStartups();
  }, [id]);

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserStartups;

