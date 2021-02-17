export default function opaqueColor(color: string, opacity: string | number): string {
  let o = parseInt("" + opacity).toString(16);
  if (o.length === 1) {
    o = "0" + o;
  }
  const rv = color + o;
  console.log("set colour from ", color, opacity, "to ", rv);
  return rv;
}
