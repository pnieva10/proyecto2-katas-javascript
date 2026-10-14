// Ejercicio 6

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

// 6.1 Haz una suma de todas las notas de los examenes usando .reduce().
const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(totalScore);

// 6.2 Haz una suma de las notas de los alumnos aprobados usando .reduce().
const passedScore = exams.reduce((acc, exam) => {
  if (exam.score >= 5) {
    return acc + exam.score;
  }
  return acc;
}, 0);
console.log(passedScore);

// 6.3 Haz la media de las notas de todos los examenes con .reduce().
const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(averageScore);
