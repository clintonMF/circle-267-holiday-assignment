//data for the instructors table
const instructors = [
    {
      "id": 1,
      "name": "Isreal Taiwo",
      "title": "Instructor",
      "age": 29,
      "gender": "Male",
      "courses": ["HTML", "CSS", "Javascript"],
      "track": "Frontend Engineering"
    },
    {
      "id": 2,
      "name": "Femi David",
      "title": "Instructor",
      "age": 32,
      "gender": "Male",
      "courses": ["Javascript", "React"],
      "track": "Frontend Engineering"
    },
    {
      "id": 3,
      "name": "Daniella Prince",
      "title": "Instructor",
      "age": 26,
      "gender": "Female",
      "courses": ["Vue"],
      "track": "Frontend Engineering"
    },
    {
      "id": 4,
      "name": "Steve Chidi",
      "title": "Instructor",
      "age": 33,
      "gender": "Male",
      "courses": ["NodeJS", "Python"],
      "track": "Backend Engineering"
    },
    {
      "id": 5,
      "name": "Bruce Wayne",
      "title": "Instructor",
      "age": 23,
      "gender": "Male",
      "courses": ["Ruby", "Go"],
      "track": "Backend Engineering"
    },
    {
      "id": 6,
      "name": "Sandra Phillips",
      "title": "Instructor",
      "age": 30,
      "gender": "Female",
      "courses": ["AWS"],
      "track": "Cloud Engineering"
    },
    {
      "id": 7,
      "name": "Joyce Byers",
      "title": "Instructor",
      "age": 31,
      "gender": "Female",
      "courses": ["GCP"],
      "track": "Cloud Engineering"
    },
  ]

// Rendering the instructor data unto the table.
for (let i = 0; i < instructors.length; i++) {       

    let table = document.getElementById("instructor-table"),
        row = document.createElement("tr"),
        col1 = document.createElement("td"),
        col2 = document.createElement("td")
        col3 = document.createElement("td")
        col4 = document.createElement("td")

    col1.innerHTML = instructors[i].name;
    // the next line of code determines the color of the button
    switch (instructors[i].track) {
        case 'Backend Engineering':
        col2.innerHTML = `<button style="color:green;border:solid green 2px">${instructors[i].track}</button>`;
        break;
        case 'Cloud Engineering':
        col2.innerHTML = `<button style="color:blue;border:solid blue 2px">${instructors[i].track}</button>`;
        break;
        default:
        col2.innerHTML = `<button>${instructors[i].track}</button>`;
    }
    
    col3.innerHTML = instructors[i].courses;
    col4.innerHTML = instructors[i].age;

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    table.appendChild(row);
}
