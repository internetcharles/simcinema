export let studios = [
  {
    companyName: '20th Century Fox',
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
  {
    companyName: 'Warner Bros.',
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
  {
    companyName: 'Universal',
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
  {
    companyName: 'Paramount',
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
  {
    companyName: 'Columbia',
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
  {
    companyName: 'TriStar',   
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
  {
    companyName: 'Miramax',
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: '',
  },
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min) + 1;
}

export const requestOffer = (id) => {
  const randomNum = getRandomInt(29);
  console.log(randomNum);
  switch (id) {
    case 0:
      if (randomNum > 15) {
        studios[0].offer = getRandomArbitrary(30, 40);
        studios[0].offerRequested = true;
        studios[0].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[0].offerRequested = true;
        studios[0].rejected = true;
        studios[0].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
        studios[0].offer = -1
      }
      break;
    case 1:
      if (randomNum > 0) {
        studios[1].offer = getRandomArbitrary(10, 20);
        studios[1].offerRequested = true;
        studios[1].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[1].offerRequested = true;
        studios[1].rejected = true;
        studios[1].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
        studios[1].offer = -1
      }
      break;
    case 2:
      if (randomNum >= 10 && randomNum <= 15) {
        studios[2].offer = getRandomArbitrary(20, 30);
        studios[2].offerRequested = true;
        studios[2].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[2].offerRequested = true;
        studios[2].rejected = true;
        studios[2].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
        studios[2].offer = -1
      }
      break;
    case 3:
      if (randomNum >= 10) {
        studios[3].offer = getRandomArbitrary(15, 35);
        studios[3].offerRequested = true;
        studios[3].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[3].offerRequested = true;
        studios[3].rejected = true;
        studios[3].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message;
        studios[3].offer = -1
      }
      break;
    case 4:
      if (randomNum >= 20) {
        studios[4].offer = getRandomArbitrary(15, 45);
        studios[4].offerRequested = true;
        studios[4].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[4].offerRequested = true;
        studios[4].rejected = true;
        studios[4].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
        studios[4].offer = -1
      }
      break;
    case 5:
      if (randomNum >= 5) {
        studios[5].offer = getRandomArbitrary(15, 25);
        studios[5].offerRequested = true;
        studios[5].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[5].rejected = true;
        studios[5].offerRequested = true;
        studios[5].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
        studios[5].offer = -1
      }
      break;
    case 6:
      if (randomNum >= 25) {
        studios[6].offer = getRandomArbitrary(35, 45);
        studios[6].offerRequested = true;
        studios[6].message = acceptedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
      } 
      else {
        studios[6].rejected = true;
        studios[6].offerRequested = true;
        studios[6].message = rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)].message
        studios[6].offer = -1
      }
      break;
  }
}

const rejectedMessages = [
  {
    message: "No thank you"
  },
  { 
    message: "Screw you!"
  },
]

const acceptedMessages = [
  {
    message: "Yes please!"
  },
  { 
    message: "We love the script!"
  },
]

export const resetData = () => {
  studios = [
    {
      companyName: '20th Century Fox',
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
    {
      companyName: 'Warner Bros.',
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
    {
      companyName: 'Universal',
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
    {
      companyName: 'Paramount',
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
    {
      companyName: 'Columbia',
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
    {
      companyName: 'TriStar',   
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
    {
      companyName: 'Miramax',
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: '',
    },
  ]
}