.toggler {
  width: 2em;
  height: 1.5em;
  position: relative;
  cursor: pointer;
}

.toggler span {
  display: block;
  position: absolute;
  height: 15%;
  width: 100%;
  background: black;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.toggler span:nth-child(1) {
  top: 0;
}

.toggler span:nth-child(2),
.toggler span:nth-child(3) {
  top: 50%;
  transform: translateY(-50%);
}

.toggler span:nth-child(4) {
  bottom: 0;
}

.toggler[state="open"] span:nth-child(1) {
  width: 0;
  top: 40%;
  left: 50%;
}

.toggler[state="open"] span:nth-child(2) {
  transform: rotate(45deg);
}

.toggler[state="open"] span:nth-child(3) {
  transform: rotate(-45deg);
}

.toggler[state="open"] span:nth-child(4) {
  width: 0;
  bottom: 40%;
  left: 50%;
}

<plus-dialog-toggler class="toggler" connector="dialog-animation">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</plus-dialog-toggler>