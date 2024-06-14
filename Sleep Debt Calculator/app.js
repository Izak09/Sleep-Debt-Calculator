const getSleepHours = day => 
  day === 'Monday' ? 8 :
  day === 'Tuesday' ? 7 :
  day === 'Wednesday' ? 8 :
  day === 'Thursday' ? 8 :
  day === 'Friday' ? 8 :
  day === 'Saturday' ? 9 :
  day === 'Sunday' ? 7 :
  'Invalid day';

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

