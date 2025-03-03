import React from "react";
import { auth } from "@/auth";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function page({
  searchParams,
}) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const session = await auth();

  // const posts = await client.fetch(STARTUPS_QUERY);
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params }); // Fetching data from Sanity and live preview

  // const posts = [
  //   {
  //     _createdAt: new Date().toISOString(),
  //     views: 100,
  //     author: {
  //       _id: "1",
  //       name: "John Doe",
  //       image: "https://placehold.co/48x48",
  //     },
  //     title: "Startup 1",
  //     category: "Tech",
  //     _id: "1",
  //     image: "https://placehold.co/48x48",
  //     description: "Description 1",
  //   },
  // ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query
            ? `Search results for &quot;${query}&quot;`
            : "Latest Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-20-semibold">
              No startups found for &quot;{query}&quot;
            </p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
