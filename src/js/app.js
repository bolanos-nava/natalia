function advancePage({
    currentPage = {
        arrowId: "landing-arrow-button",
        containerToHideId: "landing-page-container",
        transitionClassName: "transition-slide-up",
    },
    nextPage = {
        containerToShowId: "horizontal-carousel",
        backgroundContainerId: "said-the-king-container",
        transitionClassName: "transition-slide-up",
    } }) {

    const currentPageElements = {
        arrow: document.getElementById(currentPage.arrowId),
        containerToHide: document.getElementById(currentPage.containerToHideId),
    }
    const nextPageElements = {
        containerToShow: document.getElementById(nextPage.containerToShowId),
        backgroundContainer: document.getElementById(nextPage.backgroundContainerId),
    }

    currentPageElements.arrow.addEventListener("click", () => {
        nextPageElements.containerToShow.classList.remove("hidden");
        nextPageElements.backgroundContainer.classList.add("background");
        setTimeout(() => {
            currentPageElements.containerToHide.classList.add(currentPage.transitionClassName);
            nextPageElements.containerToShow.classList.add(nextPage.transitionClassName);
        }, 100);
        setTimeout(() => {
            currentPageElements.containerToHide.classList.add("hidden");
        }, 1000)
    });
}

advancePage({
    currentPage: {
        arrowId: "landing-arrow-button",
        containerToHideId: "landing-page-container",
        transitionClassName: "transition-slide-up",
    },
    nextPage: {
        containerToShowId: "horizontal-carousel",
        backgroundContainerId: "said-the-king-container",
        transitionClassName: "transition-slide-up",
    }
});

advancePage({
    currentPage: {
        arrowId: "said-the-king-arrow",
        containerToHideId: "said-the-king-container",
        transitionClassName: "transition-slide-left",
    },
    nextPage: {
        containerToShowId: "woman-container",
        backgroundContainerId: "woman-container",
        transitionClassName: "transition-slide-left",
    }
});