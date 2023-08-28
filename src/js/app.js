function advancePage({
    currentPage = {
        arrowId: "landing-arrow-button",
        containerToHideId: "landing-page-container",
        transitionClassName: "transition-slide-up",
        oldColor: "black",
    },
    nextPage = {
        containerToShowId: "horizontal-carousel",
        backgroundContainerId: "said-the-king-container",
        hiddenPosition: "bottom",
        newColor: "pastel-pink"
    } }) {

    const currentPageElements = {
        arrow: document.getElementById(currentPage.arrowId),
        containerToHide: document.getElementById(currentPage.containerToHideId),
    }
    const nextPageElements = {
        containerToShow: document.getElementById(nextPage.containerToShowId),
        backgroundContainer: document.getElementById(nextPage.backgroundContainerId),
    }

    const mainContainer = document.getElementById("main-container");

    currentPageElements.arrow.addEventListener("click", () => {
        nextPageElements.containerToShow.classList.remove("hidden");
        nextPageElements.backgroundContainer.classList.add("background");
        setTimeout(() => {
            currentPageElements.containerToHide.classList.add(currentPage.transitionClassName);
            nextPageElements.containerToShow.classList.remove(`hidden-${nextPage.hiddenPosition}`);
            mainContainer.classList.replace(currentPage.oldColor, nextPage.newColor);
        }, 300);
        setTimeout(() => {
            currentPageElements.containerToHide.classList.add("hidden");
        }, 1000);
    });
}

advancePage({
    currentPage: {
        arrowId: "landing-arrow-button",
        containerToHideId: "landing-page-container",
        transitionClassName: "transition-slide-up",
        oldColor: "black",
    },
    nextPage: {
        containerToShowId: "landing2-page-container",
        backgroundContainerId: "landing2-page-container",
        hiddenPosition: "bottom",
        newColor: "black"
    }
});

advancePage({
    currentPage: {
        arrowId: "landing2-arrow-button",
        containerToHideId: "landing2-page-container",
        transitionClassName: "transition-slide-up",
        oldColor: "black",
    },
    nextPage: {
        containerToShowId: "horizontal-carousel",
        backgroundContainerId: "said-the-king-container",
        hiddenPosition: "bottom",
        newColor: "sunset"
    }
});

advancePage({
    currentPage: {
        arrowId: "said-the-king-arrow",
        containerToHideId: "said-the-king-container",
        transitionClassName: "transition-slide-left",
        oldColor: "sunset",
    },
    nextPage: {
        containerToShowId: "woman-container",
        backgroundContainerId: "woman-container",
        hiddenPosition: "right",
        newColor: "pomp-and-power"
    }
});

advancePage({
    currentPage: {
        arrowId: "woman-arrow",
        containerToHideId: "woman-container",
        transitionClassName: "transition-slide-left",
        oldColor: "pomp-and-power",
    },
    nextPage: {
        containerToShowId: "restflow-container",
        backgroundContainerId: "restflow-container",
        hiddenPosition: "right",
        newColor: "melon"
    }
});

advancePage({
    currentPage: {
        arrowId: "restflow-arrow",
        containerToHideId: "restflow-container",
        transitionClassName: "transition-slide-left",
        oldColor: "melon",
    },
    nextPage: {
        containerToShowId: "spiritualized-container",
        backgroundContainerId: "spiritualized-container",
        hiddenPosition: "right",
        newColor: "pastel-blue"
    }
});

advancePage({
    currentPage: {
        arrowId: "spiritualized-arrow",
        containerToHideId: "spiritualized-container",
        transitionClassName: "transition-slide-left",
        oldColor: "pastel-blue",
    },
    nextPage: {
        containerToShowId: "mellotron-container",
        backgroundContainerId: "mellotron-container",
        hiddenPosition: "right",
        newColor: "rose-taupe"
    }
});

advancePage({
    currentPage: {
        arrowId: "mellotron-arrow",
        containerToHideId: "mellotron-container",
        transitionClassName: "transition-slide-left",
        oldColor: "rose-taupe",
    },
    nextPage: {
        containerToShowId: "iambic-container",
        backgroundContainerId: "iambic-container",
        hiddenPosition: "right",
        newColor: "pastel-pink"
    }
});