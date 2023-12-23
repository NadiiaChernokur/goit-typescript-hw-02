/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function isWeekend(value: Week): boolean {
  switch (value) {
    case Week.Saturday:
    case Week.Sunday:
      return true;
    default:
      return false;
  }
}
