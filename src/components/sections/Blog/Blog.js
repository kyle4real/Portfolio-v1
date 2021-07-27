import React from "react";
import SectionLayout from "./../../../UI/SectionLayout/SectionLayout";
import SectionHeading from "../../../UI/SectionLayout/SectionHeading/SectionHeading";

import classes from "./Blog.module.scss";

const Blog = () => {
    return (
        <SectionLayout>
            <SectionHeading>Blog</SectionHeading>
            <div className={classes.featured}></div>
        </SectionLayout>
    );
};

export default Blog;
