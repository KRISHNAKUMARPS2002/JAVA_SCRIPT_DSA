function printProgressBar(current, total, prefix = "Progress", barLength = 40) {
  const percent = (current / total) * 100;
  const filledLength = Math.floor((barLength * current) / total);
  const bar = "█".repeat(filledLength) + "-".repeat(barLength - filledLength);
  process.stdout.write(
    `\r${prefix}: |${bar}| ${percent.toFixed(1)}% (${current}/${total})`
  );

  if (current === total) {
    process.stdout.write("\n");
  }
}

// Example usage:
const total = 100;

let current = 0;
const interval = setInterval(() => {
  current++;
  printProgressBar(current, total, "Uploading");
  if (current === total) clearInterval(interval);
}, 60);
