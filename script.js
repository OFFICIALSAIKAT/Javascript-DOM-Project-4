const courses = ['Fullstack js bootcamp','fullstack datascience bootcamp','automation','java bootcamp','Testing','Reactjs 2022','Nodejs 2022'];

document.getElementById('search').addEventListener('input',(e)=>{
let coursesArray = [];

if(e.target.value){
    coursesArray = courses.filter(course => course.toLowerCase().includes(e.target.value));

   
}
showcoursesArray(coursesArray);

});

function showcoursesArray(coursesArray){
    document.querySelector('ul').innerHTML = coursesArray;
}