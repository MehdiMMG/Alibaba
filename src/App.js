import "./styles/main.scss"
import {Navbar, Hero, Search, Others, Details, Story, Trophy, Footer, Copyright, QandA} from "./components/index";

function App() {
  return (
    <div>
      <Navbar></Navbar>
    
      <Hero></Hero>

      <Search></Search>

      <Others></Others>
      
      <QandA></QandA>

      <Details></Details>

      <Story></Story>

      <Trophy></Trophy>

      <Footer></Footer>

      <Copyright></Copyright>
    </div>
  );
}

export default App;
