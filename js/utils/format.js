// Formatting helpers: formatPrice and formatDateTime.
function roundToCents(amount) {
  return Math.round(amount * 100) / 100;
}

// Round first so the page always shows the same value that roundToCents compares.
function formatPrice(amount) {
  return CURRENCY + roundToCents(amount).toFixed(2);
}

function formatPercent(rate) {
  return Math.round(rate * 100) + "%";
}

function formatTime(date) {
  return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function formatDateTime(date) {
  return date.toLocaleDateString("en-GB") + ", " + formatTime(date);
}

function formatItemCount(itemCount) {
  if (itemCount === 1) {
    return "1 item";
  }
  return itemCount + " items";
}
