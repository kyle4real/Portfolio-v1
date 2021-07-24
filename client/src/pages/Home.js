import React from "react";
import Header from "../components/Header/Header";
import About from "../components/sections/About/About";
import Hero from "../components/sections/Hero/Hero";
import Projects from "../components/sections/Projects/Projects";
import PageLayout from "../UI/PageLayout/PageLayout";

const Home = () => {
    return (
        <PageLayout>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
        </PageLayout>
    );
};

export default Home;
