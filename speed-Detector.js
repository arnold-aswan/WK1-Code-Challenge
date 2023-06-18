// prompts user for input = speed of a car
let speed = prompt("Enter speed: ")

function speedDetector(speed) {
    const speedLimit = 70
    const pointsLimit = 12
    let points
    // if speed is less than 70 then print ok
    if(speed <= speedLimit) {
        console.log("OK")
        alert("OK")
    } else {
     // else for every 5 above 70 (speed limit) give 1 demerit
        let excess = speed - speedLimit
        points = Math.floor(excess / 5)
       
     // print total number of demerits
        console.log(`Points: ${points}`)
        alert(`Points: ${points}`)
        
     // if demerit points >12 print "License suspended"
        if(points > pointsLimit) {
            console.log("License suspended")
            alert("License suspended")
        }
    }
}

speedDetector(speed)