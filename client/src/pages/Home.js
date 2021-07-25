import React from "react";
import Header from "../components/Header/Header";
import About from "../components/sections/About/About";
import Contact from "../components/sections/Contact/Contact";
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
                <Contact />
            </main>
        </PageLayout>
    );
};

export default Home;
