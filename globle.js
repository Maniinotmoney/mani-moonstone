// const myNum = document.querySelectorAll('.count')
// // console.log(myNum.innerText)
// let speed = 200;

// myNum.forEach( (myCount) => {
    
    
//     let target_count = parseInt(myCount.dataset.count);
//     let init_count = +myCount.innerText;
//     // console.log(target_count)
    
//     let new_increment_num = Math.floor(target_count / speed);
    
//     const updateNumber = () => {
//         init_count +=  new_increment_num;
//         myCount.innerText = init_count;
        
//         if(init_count < target_count){
//             setTimeout(() => {updateNumber()}, 5)
//         }
//     }
    
//     updateNumber();
    
// })
// const myNums = document.querySelectorAll('.count');

// myNums.forEach((myCount) => {
//     let target_count = parseInt(myCount.dataset.count);
//     let init_count = +myCount.innerText;

//     const speed = 200;
//     let increment = Math.ceil(target_count / speed); // Calculate increment based on target_count and speed

//     if (target_count <= speed) {
//         increment = 1; // If target_count is small, set increment to 1 to ensure smooth animation
//     }

//     const updateNumber = () => {
//         init_count += increment;

//         if (init_count >= target_count) {
//             myCount.innerText = target_count;
//         } else {
//             myCount.innerText = init_count;
//             setTimeout(updateNumber, 50);
//         }
//     }

//     updateNumber();
// });


// nav bar

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
mobileMenu.classList.toggle('hidden');
})


const myNums = document.querySelectorAll('.count');

myNums.forEach((myCount) => {
    let target_count = parseInt(myCount.dataset.count);
    let init_count = +myCount.innerText;

    const speed = 200;
    let increment = Math.ceil(target_count / speed); // Calculate increment based on target_count and speed

    if (target_count <= speed) {
        increment = 1; // If target_count is small, set increment to 1 to ensure smooth animation
    }

    const updateNumber = () => {
        init_count += increment;

        if (init_count >= target_count) {
            myCount.innerText = target_count;
        } else {
            myCount.innerText = init_count;
            setTimeout(updateNumber, 5);
        }
    }

    // Stagger setTimeout calls for each digit
    setTimeout(updateNumber, Math.random() * 1000); // Random delay between 0 and 1000 milliseconds
});
