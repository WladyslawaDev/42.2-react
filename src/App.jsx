import "./App.css";


//lessons imports
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";
/* import Lesson03 from "./lessons/Lesson03/Lesson03"; */

//homework imports
import Homework02 from "./homeworks/Homework02/Homework02";
/* import LessonCard from "./components/LessonCard/LessonCard"; */

//myhomeworks imports
import MyHomework03 from "./myHomworks/MyHomework03/MyHomework03";
//consultation imports


function App() {
  return (
    <div className="App">
   
    {/*   <Lesson02 /> */}
      {/*  <Lesson03/> */}

    {/*   <Homework02 /> */}
    <MyHomework03 />
    
    </div>
  );
}

export default App;
