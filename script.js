let patients = [];
let appointments = [];

function addPatient() {
    let name = document.getElementById("patientName").value.trim();
    let age = document.getElementById("patientAge").value.trim();

    if (name === "" || age === "") {
        alert("Please enter valid patient information.");
        return;
    }

    let exists = patients.some(p => p.name.toLowerCase() === name.toLowerCase());
    if (exists) {
        alert("Patient already exists.");
        return;
    }

    let patient = {
        name: name,
        age: age
    };

    patients.push(patient);

    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";

    displayPatients();
}

function addAppointment() {
    let name = document.getElementById("apptPatient").value.trim();
    let month = document.getElementById("apptMonth").value;
    let day = document.getElementById("apptDay").value;
    let year = document.getElementById("apptYear").value;

    if (name === "" || month === "" || day === "" || year === "") {
        alert("Please fill out all appointment fields.");
        return;
    }

    let date = `${month}/${day}/${year}`;

    let appointment = {
        name: name,
        date: date
    };

    appointments.push(appointment);

    document.getElementById("apptPatient").value = "";
    document.getElementById("apptMonth").value = "";
    document.getElementById("apptDay").value = "";
    document.getElementById("apptYear").value = "";

    displayAppointments();
}

function displayPatients() {
    let list = document.getElementById("patientList");
    list.innerHTML = "";

    patients.forEach(p => {
        let item = document.createElement("li");
        item.textContent = `${p.name} (Age: ${p.age})`;
        list.appendChild(item);
    });
}

function displayAppointments() {
    let list = document.getElementById("appointmentList");
    list.innerHTML = "";

    appointments.forEach(a => {
        let item = document.createElement("li");
        item.textContent = `${a.name} - ${a.date}`;
        list.appendChild(item);
    });
}