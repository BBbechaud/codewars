// Day 121 LeetCode 2621.(easy) Sleep

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}