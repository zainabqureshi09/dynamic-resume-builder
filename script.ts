
// Resume Form and Elements
const form = document.getElementById("cv-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;

// Event Listener for Form Submission
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Form Data Retrieval
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const educationStartDate = (document.getElementById("education-start-date") as HTMLInputElement).value;
    const educationEndDate = (document.getElementById("education-end-date") as HTMLInputElement).value || "Present";
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;



    // Generate Resume HTML
    const resumeHTML = `
        <div class="profile-section">
            <h3>${name}</h3>
        </div>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h4>Professional Summary</h4>
        <p>${summary}</p>
        <hr>
        <h4>Education</h4>
        <p><strong>${degree}</strong> from ${institution} (${educationStartDate} - ${educationEndDate})</p>
        <hr>
        <h4>Skills</h4>
        <p>${skills}</p>
        
    `;

    // Display Resume in Preview Section
    resumeContent.innerHTML = resumeHTML;
});
