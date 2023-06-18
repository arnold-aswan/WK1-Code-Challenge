// prompts the user to enter their grades
let grade = prompt("Please enter your grade: ")

function testGrade(grade) {
    // checks if the grade entered is a valid grade or not
    if(grade < 0 || grade > 100) {
        // if grade entered is invalid it prints out invalid error message
        console.log("Haha nice try, enter valid grade")
        alert("Haha nice try, enter valid grade")
    }  
    
    // evaluates the entered grades giving out the results
    if(grade > 79 && grade <= 100) {
        console.log('A')
        alert('A')
    } else if(grade >= 60 && grade <= 79) {
        console.log('B')
        alert('B')
    } else if(grade >= 49 && grade <= 59) {
        console.log('C')
        alert('C')
    } else if(grade >= 40 && grade < 49) {
        console.log('D')
        alert('D')
    } else if(grade < 40) {
        console.log('E')
        alert('E')
    }    
}

// call the function when the page loads
testGrade(grade)