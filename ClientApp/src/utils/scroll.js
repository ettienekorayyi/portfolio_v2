const DURATION = 1500;

export const smoothScroll = (target) => {
    const targetPosition = target.getBoundingClientRect().top;
    const startingPosition = window.pageYOffset;
    const distance = targetPosition - startingPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;

        var run = ease(timeElapsed, startingPosition, distance, DURATION);
        window.scrollTo(0, run);
        if(timeElapsed < DURATION) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation)
}