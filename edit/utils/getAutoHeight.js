export const getAutoHeight = (i, value) => {
  if (i[1].input) {
    return "auto";
  }
  const ln = value.length;
  const rows = Math.ceil(ln / 19);
  const h = rows * 30;
  if (h <= 30) {
    return "40px";
  } else return h + "px";
}