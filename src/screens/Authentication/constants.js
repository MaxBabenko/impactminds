// @flow

export const SIGNUP_STEPS_TITLES: Map<number, string> = new Map([
  [1, 'General Info'],
  [2, 'Additional Info - Begin'],
  [3, 'Additional Info - End'],
]);

export const SIGNUP_STEPS: Array<number> = [1, 2, 3];

export const OCCUPATION_LIST: Array<string> = [
  'Architector',
  'Builder',
  'Doctor',
  'Engineer',
  'Manager',
  'Teacher',
];

export const INFO_BEGIN: Array<string> = [
  'Currently, is there any stressful situation that needs to be managed?',
  'Do you tend to worry about what other people think of you, your decisions and choices?',
  'When you feel unhappy with a situation, do you look for new experiences or chances to change it?',
];
export const INFO_END: Array<string> = [
  'Do you have difficulties to recover after an adversity?',
  'Do you have any medical condition or worry that affects your current happiness/wellbeing?',
];
export const INFO_BEGIN_INTRO: string = 'Well, now let\'s go through some question about how are you feeling right now. Try to be as much sincere as possible. This will give us the basis over which we can design the best training plan just for you! It will take less than 3 minutes.';
