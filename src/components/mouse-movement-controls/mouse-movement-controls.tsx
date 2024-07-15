export const Controller = () => {
  let mouse = document.getElementById("mouse") as HTMLImageElement;
  window.addEventListener("mousemove", (e) => {
    mouse.style.top = `${e.clientY}px`;
    mouse.style.left = `${e.clientX}px`;
  });
};
