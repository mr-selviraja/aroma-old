document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".exclusives__tab");
    const contents = document.querySelectorAll(".exclusives__tab--content");

    // Function to update the active tab and content
    const updateTabContent = (tabNum) => {
        // Update tab styles
        tabs.forEach(tab => tab.classList.remove("exclusives__tab--active"));
        tabs[tabNum].classList.add("exclusives__tab--active");

        // Update content visibility
        contents.forEach(content => {
            content.classList.remove("d-block");
            content.classList.add("d-none");
            
            if (content.getAttribute("data-content") === tabNum.toString()) {
                content.classList.add("d-block");
            }
        });
    };

    // Set the initial state
    updateTabContent(0);

    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabNum = parseInt(tab.getAttribute("data-tab"));
            updateTabContent(tabNum);
        });
    });
});

/**
 * Reviews slider code
 */
const btnSlidePrev = document.querySelector(".reviews__slider--prev-btn");
const btnSlideNext = document.querySelector(".reviews__slider--next-btn");
const slidesList = document.querySelectorAll(".reviews__slider--slide");

let currSlide = 0;

slidesList.forEach((slide, index) => slide.style.transform = `translateX(${index*100}%)`);

btnSlideNext.addEventListener("click", () => {
    if(currSlide == slidesList.length-1) currSlide = 0;
    else currSlide++;

    slidesList.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currSlide) * 150}%)`;
    });
});

btnSlidePrev.addEventListener("click", () => {
    if(currSlide == 0) currSlide = slidesList.length-1;
    else currSlide--;

    slidesList.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currSlide) * 150}%)`;
    });
});
