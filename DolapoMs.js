// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("More Info?");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "More Info?";
createform.appendChild(heading);
function validate_name(event)
{
    let error_element, name;

    name = event.target.value;
    if (name.length >= 4)
    {
        if (document.body.contains(document.querySelector("#contact_form_name_validation_error")))
        {
            error_element = document.querySelector("#contact_form_name_validation_error");
            error_element.parentNode.removeChild(error_element);
        }
        return;
    }
    error_element = document.createElement("li");
    error_element["id"] = "contact_form_name_validation_error";
    error_element.innerHTML = "name must contains at least 4 characters";
    document.querySelector("#contact_form_validation_errors").appendChild(error_element);
}

function validate_email(event)
{
    let email, contains_single_at, contains_dot, error_element;

    email = event.target.value;
    //simple email validation algorithm
    //1. check if email contains a single @ symbol
    contains_single_at = email.includes("@") && email.split("@").length === 2;
    //2. check if email contains a . symbol
    contains_dot = email.includes(".");

    if (contains_single_at && contains_dot)
    {
        if (document.body.contains(document.querySelector("#contact_form_email_validation_error")))
        {
            error_element = document.querySelector("#contact_form_email_validation_error");
            error_element.parentNode.removeChild(error_element);
        }
        return;
    }
    error_element = document.createElement("li");
    error_element["id"] = "contact_form_email_validation_error";
    error_element.innerHTML = "enter a valid email";
    document.querySelector("#contact_form_validation_errors").appendChild(error_element);
}

function validate_title(event)
{
    let error_element, title;

    title = event.target.value;
    if (title.length >= 4)
    {
        if (document.body.contains(document.querySelector("#contact_form_title_validation_error")))
        {
            error_element = document.querySelector("#contact_form_title_validation_error");
            error_element.parentNode.removeChild(error_element);
        }
        return;
    }
    error_element = document.createElement("li");
    error_element["id"] = "contact_form_title_validation_error";
    error_element.innerHTML = "title must contain at least 4 characters";
    document.querySelector("#contact_form_validation_errors").appendChild(error_element);
}

function validate_message(event)
{
    let error_element, message;

    message = event.target.value;
    if (message.length >= 20)
    {
        if (document.body.contains(document.querySelector("#contact_form_message_validation_error")))
        {
            error_element = document.querySelector("#contact_form_message_validation_error");
            error_element.parentNode.removeChild(error_element);
        }
        return;
    }
    error_element = document.createElement("li");
    error_element["id"] = "contact_form_message_validation_error";
    error_element.innerHTML = "message must contain at least 20 characters";
    document.querySelector("#contact_form_validation_errors").appendChild(error_element);
}

document.querySelector("input[name='email']").addEventListener("change", validate_email);;
document.querySelector("input[name='subject']").addEventListener("change", validate_subject);;
document.querySelector("input[name='message']").addEventListener("change", validate_message);;

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var namelabel = document.createElement('label'); // Create Label for Subject Field
namelabel.innerHTML = "Subject : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Subject
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dsubject");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

