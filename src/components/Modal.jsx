// NPM packages
import { createPortal } from "react-dom";

// Project files
import { useModal } from "state/ModalProvider";

export default function Modal() {
  const { modal, setModal } = useModal();

  // Safeguard
  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background">{/* empty on purpose */}</div>
      <div className="content">{modal}</div>
    </div>,
    document.getElementById("portal")
  );
}
