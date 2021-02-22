export default function formatFromFirebase(data) {
  const result = data
    ? Object.entries(data).map(([key, value]) => [key, value])
    : [];
  return result;
};


