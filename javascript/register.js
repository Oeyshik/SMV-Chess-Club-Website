// Form Validation And Storing Form Data
 button.onclick = function() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const emailId = document.getElementById("emailId").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const department = document.getElementById("department").value;
    const course = document.getElementById("course").value;
    const collegeId = document.getElementById("collegeId").value;

    if (firstName.trim()=="") {
        alert("First Name cannot be empty");
        return false;
    }

    else if (lastName.trim()=="") {
        alert("Last Name cannot be empty");
        return false;
    }
    
    else if (phoneNumber.length!=10) {
        alert("Phone Number must contain 10 digits");
        return false;
    }

    else if (department.length!=4) {
        alert("Enter Valid Department ID");
        return false;
    }

    else if (collegeId.length!=6) {
        alert("Enter Valid College ID");
        return false;
    }
    
    else {
        true;
    }

    let member__records = new Array();
    member__records=JSON.parse(localStorage.getItem("Members"))?JSON.parse(localStorage.getItem("Members")):[];
    if(member__records.some((v)=>{return v.emailId==emailId}))
    {
        alert("This Email Address Is Already In Use");
        return false;
    }
    else
    {
        member__records.push({
        "firstName":firstName,
        "lastName":lastName,
        "dob":dob,
        "emailId":emailId,
        "phoneNumber":phoneNumber,
        "department":department,
        "course":course,
        "collegeId":collegeId
    })

    localStorage.setItem("Members",JSON.stringify(member__records));
    }

}
console.log(localStorage);