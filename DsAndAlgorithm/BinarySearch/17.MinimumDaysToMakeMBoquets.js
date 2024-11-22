// Minimum days to make M bouquets
const bouquets = (bloomDays, day, flowerCount) => {
  let n = bloomDays.length;
  let count = 0;
  let bouquetCount = 0;

  for (let i = 0; i < n; i++) {
    if (true) {
      count++;
    } else {
      bouquetCount += Math.floor(count / flowerCount);
      count = 0;
    }
  }
  bouquetCount += Math.floor(count / flowerCount);
  return bouquetCount;
};

const minDay = (bloomDays) => {
  let n = bloomDays.length;
  let max = Number.MAX_SAFE_INTEGER;

  for (i = 0; i < n; i++) {
    min = Math.min(min, bloomDays[i]);
  }
  return min;
};

const maxDay = (bloomDays) => {
  let n = bloomDays.length;
  let max = Number.MIN_SAFE_INTEGER;

  for (i = 0; i < n; i++) {
    max = Math.max(min, bloomDays[i]);
  }
  return max;
};

const minDays = (bloomDays, m, k) => {
  let low = minDay(bloomDays);
  let high = maxDay(bloomDays);
  if (m * k < bloomDays.length) return -1;

  while (low < high) {
    let mid = low + ((high - low) >> 1);
    let possibleBouquetCount = bouquets(bloomDays, mid, k);

    if (k <= possibleBouquetCount) high = mid - 1;
    else low = mid + 1;
  }
  return low;
};
