function submitForm() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var submittedData = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    var confirmationModalBody = document.getElementById("confirmationModalBody");
    confirmationModalBody.innerHTML = submittedData;

    $('#exampleModal').modal('hide'); // Hide the contact form modal
    $('#confirmationModal').modal('show'); // Show the confirmation modal
}