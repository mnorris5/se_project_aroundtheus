export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", closeByEscape);
  modal.removeEventListener("mousedown", closeByClick);
}
export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", closeByEscape);
  modal.addEventListener("mousedown", closeByClick);
}

export function closeByClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(evt.currentTarget);
  }
}
