const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        completed: false
    }
];

const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");
const filterButtons = document.querySelectorAll(".filter-button");

function displayCourses(filter = "all") {
    const filteredCourses = filter === "all"
        ? courses
        : courses.filter((course) => course.subject === filter);

    courseList.innerHTML = "";

    filteredCourses.forEach((course) => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.textContent = `${course.subject} ${course.number}`;
        courseList.appendChild(courseCard);
    });

    const credits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    totalCredits.textContent = `The total credits for course listed above is ${credits}`;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        displayCourses(button.dataset.filter);
    });
});

displayCourses();
