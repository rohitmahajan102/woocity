/*--- date picker js start here ---*/

const dateInput = document.querySelector('.date-input');
const calendar = document.querySelector('.calendar');
const calendarDays = document.getElementById('calendar-days');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let selectedDate = new Date();
let currentMonth = selectedDate.getMonth();
let currentYear = selectedDate.getFullYear();

dateInput.addEventListener('click', () => {
    calendar.classList.toggle('active');
    renderCalendar(currentMonth, currentYear);
});

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

function renderCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    calendarDays.innerHTML = '';
    monthYearDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;

        // Add active class if it's the selected date
        if (selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day) {
            dayElement.classList.add('selected');
        }

        dayElement.addEventListener('click', () => {
            selectedDate = new Date(year, month, day);

            // Remove the active class from all day elements
            document.querySelectorAll('.calendar-days div').forEach(el => {
                el.classList.remove('selected');
            });

            // Add the active class to the clicked date
            dayElement.classList.add('selected');

            // Update the input with the selected date
            dateInput.value = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            calendar.classList.remove('active');
        });

        calendarDays.appendChild(dayElement);
    }
}

window.addEventListener('click', (event) => {
    if (!calendar.contains(event.target) && !dateInput.contains(event.target)) {
        calendar.classList.remove('active');
    }
});

/*--- date picker js start here ---*/


// var swiper = new Swiper(".restaurantSwiper", {
//     slidesPerView: 4.5,
//     spaceBetween: 0,
//     speed: 1500,
//     loop: true,
//     freeMode: true,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.2,
//         },
//         640: {
//             slidesPerView: 1.3,
//         },
//         767: {
//             slidesPerView: 2.5,
//         },
//         991: {
//             slidesPerView: 3.5,
//         },
//         1199: {
//             slidesPerView: 3.5,
//         },
//     },
// });

// var swiper = new Swiper(".couponSwiper", {
//     slidesPerView: 3.5,
//     spaceBetween: 30,
//     speed: 1500,
//     loop: false,
//     freeMode: true,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.3,
//             spaceBetween: 15,
//         },
//         640: {
//             slidesPerView: 1.3,
//             spaceBetween: 15,
//         },
//         767: {
//             slidesPerView: 2.5,
//             spaceBetween: 15,
//         },
//         991: {
//             slidesPerView: 3.5,
//             spaceBetween: 15,
//         },
//         1199: {
//             slidesPerView: 3.5,
//             spaceBetween: 25,
//         },
//     },
// });


// function widthCheck() {
//     let sW = $('body').width();
//     let cW = $('.container').width();
//     let netMargin = (parseInt(sW) - parseInt(cW)) / 2;
//     console.log(sW, cW, netMargin);
//     $(".restaurant-list, .coupon-list").css("margin-right", -netMargin + "px");
// }
// widthCheck();

// $(window).resize(function () {
//     widthCheck();
// });


/*--- range bar js ---*/
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

