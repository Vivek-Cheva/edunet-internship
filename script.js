const sub_btn = document.querySelector("form")
sub_btn.addEventListener("submit",(e)=>{

const f_name = document.getElementById('firstname').value
const l_name = document.getElementById('lastname').value
const about  =  document.getElementById('about').value
const p1title = document.getElementById('p1title').value
const p1desc = document.getElementById('p1desc').value
const p1git = document.getElementById('p1git').value
const p2title = document.getElementById('p2title').value
const p2desc = document.getElementById('p2desc').value
const p2git = document.getElementById('p2git').value
const p3title = document.getElementById('p3title').value
const p3desc = document.getElementById('p3desc').value
const p3git = document.getElementById('p3git').value
const p4title = document.getElementById('p4title').value
const p4desc = document.getElementById('p4desc').value
const p4git = document.getElementById('p4git').value
const skills = document.getElementById('skills').value
    const formData = {
        f_name,
        l_name,
        about,
        p1title,
        p1desc,
        p1desc,
        p2desc,
        p2title,
        p2git,
        p3desc,
        p3git,
        p3title,
        p4desc,
        p4git,
        p4title,
        skills
      };
      console.log(formData)
    
      // Convert object to a JSON string
      const jsonData = JSON.stringify(formData);
    
      // Store data in Local Storage
      localStorage.setItem('portfolioData', jsonData);
    
      // Display success message (optional)
      alert('Portfolio details saved successfully!');


})