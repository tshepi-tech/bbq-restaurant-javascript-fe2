// NPM packages
import { createPortal } from "react-dom";

export default function Modal() {
  return createPortal(
    <div id="modal">
      <div className="background">{/* empty on purpose */}</div>
      <div className="content">Modal</div>
    </div>,
    document.getElementById("portal")
  );
}
