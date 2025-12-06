import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack'

function App() {
    return (
        <div className="font-display  min-h-screen antialiased">
            <div className="relative min-h-screen w-full overflow-hidden">
                <div className="absolute top-[-5%] right-[-10%]   rounded-full ">
                </div>
                <div className="absolute top-[10%] right-[5%]  rounded-full "></div>
                <div className="absolute bottom-[-15%] left-[-15%]   rounded-full ">
                </div>
                <div className="absolute bottom-[5%] left-[10%]  rounded-full ">
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <Header />
                    <Hero />
                </div>
            </div>
            <About />
            {/* <Skills /> */}
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
