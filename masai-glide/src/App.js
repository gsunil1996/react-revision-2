import React from "react";
import logo from './logo.svg';
import styles from './App.module.css';
import Items from "./Components/image";
function App() {

  const data1 = {
     image: "https://d27028dliefpk3.cloudfront.net/assets/icons/masaischool-discipline.svg",
    
    text : <div className={styles.matter}>Discipline & <div>Attendance</div></div> 
  }

  const data2 = {
     image: "https://d27028dliefpk3.cloudfront.net/assets/icons/masaischool-performance.svg",
    
    text : <div className={styles.matter}>Performance in <div>Assignments</div></div> 
  }

   const data3 = {
     image: "https://d27028dliefpk3.cloudfront.net/assets/icons/masaischool-scores.svg",
    
    text : <div className={styles.matter}>Scores in Assessments</div> 
   }
  
    const data4 = {
     image: "https://d27028dliefpk3.cloudfront.net/assets/icons/masaischool-team-work.svg",
    
    text : <div className={styles.matter}>Team Work</div> 
  }

  return (
    <div className={styles.App}>
      <h2>Glide Program</h2>
      <p className={styles.living}>Living Allowance for students</p>
      <p>For the entire duration of the full-time courses, Masai School offers financial support to the</p>
      <p>top-performing students with a living allowance of Rs. 15,000 per unit.</p>
      <br />
      <p>After closely monitoring the performance of our students in Unit 1, we evaluate them based</p>
      <p>on their -</p>

      <div className={styles.cont}>
        <Items props={data1} />
        <Items props={data2} />
        <Items props={data3} />
        <Items props={data4} />
      </div>
     
   

      <p>Based on the overall performances, we choose the top performing students who will be</p>
      <p>eligible for the living allowance of Rs. 15,000 per unit, which will be added to their ISA amount</p>
      <p>(At Masai School, each unit equals to 5 weeks and one full-time course has 6 units)</p>
      <p className={styles.underline}>Know More</p>
    </div>
  );
}

export default App;
