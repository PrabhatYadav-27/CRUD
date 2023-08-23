// Array to store subjects
let subjects = [];

// Function to add a new subject
function addSubject() {
  const name = document.getElementById("name").value;
  const code = document.getElementById("code").value;
  const courseType = document.querySelector('input[name="courseType"]:checked').value;

  subjects.push({
    name: name,
    code: code,
    courseType: courseType
  });

  clearForm();
  displaySubjects();
}

// Function to display subjects
function displaySubjects() {
  const subjectsList = document.getElementById("subjectsList");
  subjectsList.innerHTML = "";

  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${subject.name} (${subject.code}) - ${subject.courseType}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editSubject(i);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      deleteSubject(i);
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    subjectsList.appendChild(listItem);
  }
}

// Function to edit a subject
function editSubject(index) {
  const subject = subjects[index];
  document.getElementById("name").value = subject.name;
  document.getElementById("code").value = subject.code;
  document.getElementById(subject.courseType).checked = true;

  // Remove the subject from the array
  subjects.splice(index, 1);
  displaySubjects();
}

// Function to delete a subject
function deleteSubject(index) {
  subjects.splice(index, 1);
  displaySubjects();
}

// Function to clear the form fields
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("code").value = "";
  document.getElementById("theory").checked = false;
  document.getElementById("practical").checked = false;
}

// Attach event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault();
  addSubject();
});

// Initial display of subjects
displaySubjects();
