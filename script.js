const brainVisual = document.querySelector(".about-visual");
const brainSvg = document.querySelector(".brain-svg");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (brainVisual && brainSvg && !reduceMotion.matches) {
    brainVisual.addEventListener("pointermove", (event) => {
        // Touch screens don't need the hover-style tilt.
        if (event.pointerType === "touch") return;

        const bounds = brainVisual.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

        // Keep the tilt subtle: at most 5 degrees in either direction.
        brainSvg.style.setProperty("--brain-tilt-x", `${-y * 5}deg`);
        brainSvg.style.setProperty("--brain-tilt-y", `${x * 5}deg`);
    });

    brainVisual.addEventListener("pointerleave", () => {
        brainSvg.style.removeProperty("--brain-tilt-x");
        brainSvg.style.removeProperty("--brain-tilt-y");
    });
}