// Codewars challenge 21 (Level 7kyu): Suzuki needs help lining up his students!

// Suzuki needs help lining up his students!

// Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

// You will be given a string of student names. Sort them and return a list of names in descending order.

const lineupStudents = students =>
  students.trim().split(` `).sort((a, b) => b.length - a.length || b.localeCompare(a));