import createScrollSnap from "scroll-snap";

const element = document.querySelector(".carousel");

const {
    bind,
    unbind
} = createScrollSnap(element, {
    snapDestinationX: '100%',
    snapDestinationY: '90%',
    timeout: 100,
    duration: 300,
    threshold: 0.2,
    snapStop: false,
    easing: easeInOutQuad,
}, () => console.log('element snapped'));

unbind();

bind();