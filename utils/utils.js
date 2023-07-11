export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", closeByEscape);
  document.removeEventListener("mousedown", closeByClick);
}
export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", closeByEscape);
  modal.addEventListener("mousedown", closeByClick);
}
export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");

    closeModal(openedModal);
  }
}
export function closeByClick(evt, modal) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(evt.target);
  }
}
