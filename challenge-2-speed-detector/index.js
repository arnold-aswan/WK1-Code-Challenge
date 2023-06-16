// 1. prompts user for input = speed of a car
let speed = prompt("Enter speed: ")
const speedLimit = 70
let points
const pointsLimit = 12

function speedDetector(speed) {

// 2. if speed is less than 70 then print ok
    if(speed < speedLimit) {
        console.log("OK")
        alert("OK")
    } else {
        let excess = speed - speedLimit
       
        // 2.1 . else for every 5 above 70 (speed limit) give 1 demerit
        points = Math.floor(excess / 5)
       
        // 3. print total number of demerits
        console.log(`Points: ${points}`)
        alert(`Points: ${points}`)
        
        // 4. if demerit points >12 print "License suspended"
        if(points > pointsLimit) {
            console.log("License suspended")
            alert("License suspended")
        }
    }
}

speedDetector(speed)