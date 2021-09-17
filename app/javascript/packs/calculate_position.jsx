export default function calculatePosition(event) {
  let star_pos = event.target.getBoundingClientRect()["x"];
  let star_width = event.target.getBoundingClientRect()["width"];
  let mouse_pos = event.clientX;
  let border = star_pos + (star_width/2);
  var half = false;
  if (mouse_pos >= star_pos && mouse_pos < border) {
    half = true;
  }
  return half;
}
