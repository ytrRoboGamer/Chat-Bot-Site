let answers = {
  'hello': ['Hello my friend', 'Hi bro', 'Welcome back, I missed you'],
  'hi': 0, 'hlo': 0, 'hey': 0,

  'bye': ['See you later bro', 'Take care', 'Bye my friend'],
  'seeyoulater': 0, 'gtg': 0, 'igtg': 0,

  'howareyou': ['Fine, what about you?', 'All good'],
  'howisitgoing': 0, 'whatsup': 0,

  'doyouloveme': ['definitely'],
}
answers.hi = answers.hello; answers.hlo = answers.hello; answers.hey = answers.hello;
answers.seeyoulater = answers.bye; answers.gtg = answers.bye; answers.igtg = answers.bye;
answers.howisitgoing = answers.howareyou; answers.whatsup = answers.howareyou; 
answers['how are you?'] = answers['how are you'];


let customAnswers = JSON.parse(localStorage.getItem("customAnswers")) || {};


let messages = [];