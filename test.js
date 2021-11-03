function migratoryBirds(arr) {
  let frequency = {}; // objek untuk menampung berapa banyak kuantitas masing2 nilai dalam array.
  let maxFreq = 0; // holds the max frequency.
  let modes = [];

  for (let i in arr) {
    // cek adakah properti objek? Jika tidak, buat properti dan masukkan nilai 0. Jika ada, tambahkan 1
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;

    if (frequency[arr[i]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[arr[i]]; // update max.
    }
  }

  for (let k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    }
  }

  return Math.min(parseInt(modes));
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));