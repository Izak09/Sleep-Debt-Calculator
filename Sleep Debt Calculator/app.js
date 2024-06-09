const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 9;
  } else if (day === 'Sunday') {
    return 7;
  } else {
    return 'Invalid day';
  }
}

const getActualSleepHours = () => 
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = function() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDifference = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`The user got more sleep than needed. They are over by ${sleepDifference} hours.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`The user should get some rest. They are under by ${Math.abs(sleepDifference)} hours.`);
  }
}

calculateSleepDebt();

