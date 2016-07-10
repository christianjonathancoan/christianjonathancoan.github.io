$(document).ready(function () {
    $("#fullpage").fullpage({
        //Navigation
        menu: "#menu",
        lockAnchors: false,
        anchors: ["Home", "Work", "Contact"],
        navigation: false,
        navigationPosition: "right",
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: "bottom",

        //Scrolling
        css3: true,
        autoScrolling: false,
        fitToSection: false,
        scrollBar: false,
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        verticalCentered: true,
        sectionsColor: ["#1bbc9b", "#4bbfc3", "#7baabe"]
    });
});