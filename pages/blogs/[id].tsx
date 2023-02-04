"use client";
import { Box, Card, Container } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../../components/shared/NavBar";
import { Loader } from "@mantine/core";

import MoreArticles from "../../components/blog/MoreArticles";
import Author from "../../components/blog/Author";

function Blog() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: async () => {
      const response = await fetch(`/api/article`, {
        method: "POST",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      return data.article.data;
    },

    onError(error) {
      console.log(error);
    },
  });

  if (isLoading) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <Loader variant='bars' size={"lg"} />
      </div>
    );
  }

  console.log(data?.post);

  function addLineBreaks(html: string) {
    return html.replace(/<[^>]+>/g, function (match) {
      return match + "\n";
    });
  }

  return (
    <div>
      <NavBar />
      <Container size={"md"} py={"lg"} my={"lg"}>
        <div className='space-y-12'>
          <Container size={"sm"} className='text-center leading-loose'>
            <div className='space-y-4'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                {data?.post.title}
              </h1>
              <span className='text-sm font-semibold text-gray-500'>
                Published:{" "}
                {new Date(data?.post.dateAdded).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </Container>

          <Box
            className='leading-relaxed first-letter:text-7xl first-letter:font-bold 
  first-letter:mr-3 first-letter:float-left'>
            <div className='text-lg font-secondary-font break-words '>
              {addLineBreaks(data?.post.content)}
            </div>
          </Box>

          <section className='space-y-10 lg:space-y-20'>
            <div className='flex space-x-4 justify-center'>
              {data?.post.tags.map((tag) => {
                return (
                  <Card
                    shadow='lg'
                    p={"sm"}
                    radius={"md"}
                    key={tag.name}
                    className=' text-sm font-semibold'>
                    {tag.name}
                  </Card>
                );
              })}
            </div>

            <div className='py-8 border-t border-b border-slate-700'>
              <div className='flex flex-col items-center'>
                <Author />
              </div>
            </div>

            <MoreArticles />
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
