"use client";
import React from "react";
import { Card } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";

import Button from "./Button";

interface Props {
  title: string;
  description: string;
}

function BlogCard({
  title,
  description,
}: Props & { children?: React.ReactNode }) {
  return (
    <Card
      sx={{
        minHeight: "250px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
      shadow='xl'
      className='leading-relaxed group dark:bg-gray-800 space-y-2 lg:space-y-4 cursor-pointer hover:shadow-xl p-4 lg:p-6'
      radius={"md"}>
      <div className='space-y-4 '>
        <span className='dark:text-gray-100 text-xl lg:text-2xl font-semibold group-hover:text-primary-color'>
          {title}
        </span>

        <p className='font-medium dark:text-gray-200'>
          {description.slice(0, 150).concat("...")}
        </p>
      </div>

      <Button variant='light' rightIcon={<FiArrowRight className='' />}>
        Read More
      </Button>
    </Card>
  );
}

export default BlogCard;
