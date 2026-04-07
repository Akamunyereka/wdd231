const courses = [
  { name: "WDD 131", credits: 2, completed: true },
  { name: "WDD 231", credits: 3, completed: false }
];

function displayCourses(list) {
  const container = document.getElementById("courses");
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.textContent = `${course.name} (${course.credits})`;
    
    if (course.completed) {
      div.style.background = "lightgreen";
    }

    container.appendChild(div);
  });
}

// TOTAL CREDITS
const total = courses.reduce((sum, c) => sum + c.credits, 0);
console.log("Total credits:", total);

displayCourses(courses);