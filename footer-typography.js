const footerFontSizeClasses = new Set([
  "text-body-md",
  "text-body-lg",
  "text-caption",
  "text-display",
  "text-headline-lg",
  "text-headline-lg-mobile",
  "text-headline-md",
  "text-headline-sm",
  "text-label-lg",
  "text-label-md",
]);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("footer [class]").forEach((element) => {
    if (!Array.from(element.classList).some((className) => footerFontSizeClasses.has(className))) {
      return;
    }

    const currentSize = Number.parseFloat(getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentSize + 2}px`;
  });
});
