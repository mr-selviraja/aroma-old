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
