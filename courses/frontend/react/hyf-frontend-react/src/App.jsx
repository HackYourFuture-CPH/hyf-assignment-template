
import Greeting from "./components/greeting";
import Card from "./components/Card";
import Cards from "./components/cards";
import Person from "./components/person";
import Button from "./components/dangerbtn";     
import DangerButton from "./components/dangerbtn";
import TextInput from "./components/Textinput"; 
import ProfileImage from "./components/ProfileImage";

function App() {
  return (
    <>
      <Greeting />
      <Card />
      <Cards />
      <Person />
      <Button />
      <DangerButton />
      <TextInput />
      <ProfileImage />
    </>
  );
}

export default App;