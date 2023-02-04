import { Box, Card, Container } from "@mantine/core";
import React from "react";
import NavBar from "../../components/shared/NavBar";
import BlogCard from "../../components/shared/Card";
import Aside from "../../components/blogs/Aside";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import useArticles from "../../hooks/useArticles";

function Blogs() {
  const { data, isLoading } = useArticles();

  return (
    <div className='relative'>
      <NavBar />
      <Container size={"md"} py={"xl"} my={"xl"}>
        <section>
          <div className=''>
            <div className='mb-6 flex justify-between items-center'>
              <span className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary-color'>
                Latest Blogs
              </span>

              {data && (
                <span className='px-4 font-semibold text-xl'>
                  {data.length} Article{data.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
            <div className=''>
              {isLoading ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <Card
                    radius={"md"}
                    sx={{
                      minHeight: "250px",
                    }}
                    className=' bg-slate-800 animate-pulse'>
                    <div></div>
                  </Card>

                  <Card
                    radius={"md"}
                    sx={{
                      minHeight: "250px",
                    }}
                    className=' bg-slate-800 animate-pulse'>
                    <div></div>
                  </Card>

                  <Card
                    radius={"md"}
                    sx={{
                      minHeight: "250px",
                    }}
                    className=' bg-slate-800 animate-pulse'>
                    <div></div>
                  </Card>

                  <Card
                    radius={"md"}
                    sx={{
                      minHeight: "250px",
                    }}
                    className=' bg-slate-800 animate-pulse'>
                    <div></div>
                  </Card>
                </div>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {data.map((blog) => {
                    return (
                      <Link href={`/blogs/${blog.slug}`} key={blog._id}>
                        <BlogCard
                          key={blog.title}
                          title={blog.title}
                          description={blog.brief}
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Blogs;
