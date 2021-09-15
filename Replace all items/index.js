module.exports = function replaceAll(seq, find, replace) {
  const receivedSeq = seq;

  if (Array.isArray(receivedSeq)) {
    receivedSeq.map((s, i) => (s == find ? (receivedSeq[i] = replace) : null));
  }
  if (typeof seq === "string") {
    return [...seq].map((x) => (x == find ? replace : x)).join("");
  }

  return seq;
};
