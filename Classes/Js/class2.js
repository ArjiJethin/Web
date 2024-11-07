class Day {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  nextDay() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentIndex = daysOfWeek.indexOf(this.name);
    let nextIndex = (currentIndex + 1) % daysOfWeek.length;
    return new Day(daysOfWeek[nextIndex]);
  }
}

class Week {
  constructor() {
    this.days = [
      new Day("Sunday"),
      new Day("Monday"),
      new Day("Tuesday"),
      new Day("Wednesday"),
      new Day("Thursday"),
      new Day("Friday"),
      new Day("Saturday"),
    ];
    this.currentDayIndex = 0;
  }

  getCurrentDay() {
    return this.days[this.currentDayIndex].getName();
  }

  moveToNextDay() {
    this.currentDayIndex = (this.currentDayIndex + 1) % this.days.length;
  }
}

// Example usage:
const week = new Week();
console.log(week.getCurrentDay()); // Output: Sunday
week.moveToNextDay();
console.log(week.getCurrentDay()); // Output: Monday
