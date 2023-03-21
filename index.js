function scuberGreetingForFeet(feet) {
  // My scuberGreetingForFeer code
  let message;
  if (feet <= 400) {
    message = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    message = 'No can do.';
  }
  return message;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// switch
function switchOnCharmFromTip(tip) {
  // My Switch code
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
