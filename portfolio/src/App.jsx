import About from "./page/about";
import HomePage from "./page/HomePage";
import Stack from "./page/stack";
import Work from "./page/work";
import Contact from "./page/contact";



function App() {
  // const [introDone, setIntroDone] = useState(false);
 

  return (
    <div  className="w-full">
      <main  className="w-full">
       
        <HomePage />
        <About />
        <Work />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}

export default App;
