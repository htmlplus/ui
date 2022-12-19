- update document
- toDataURL(type: 'image/svg+xml', encoderOptions?: ToSVGOptions): string;
- toDataURL(type?: string, encoderOptions?: number): string;
- background image
- readonly
- value
- onReady
- onChange
- clearOnResize
- getTrimmedCanvas
- resize
- keyboards

// setInterval(() => {
// const ratio = Math.max(window.devicePixelRatio || 1, 1);
// canvas.width = canvas.offsetWidth _ ratio;
// canvas.height = canvas.offsetHeight _ ratio;
this
.$canvas
    .getContext("2d")
    .scale(
        this.$canvas.width / this.$canvas.offsetWidth, 
        this.$canvas.height / this.$canvas.offsetHeight
);
// signaturePad.clear(); // otherwise isEmpty() might return incorrect value
// }, 2000);
