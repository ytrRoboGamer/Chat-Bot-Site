function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}



function enter(event, action) {
  if (event.key === 'Enter' && action === 'send') {
    send();
  }
}



function send() {

  const value = messageInput.value.trimStart();
  const message = value.toLowerCase().replaceAll(' ', '').replaceAll('?', "").replaceAll("'", '');
  const answer = answers[message];

  if (value.replaceAll(' ', '') === '') {
    alert('Please send a valid messages');
    messageInput.value = '';
    return;
  }

  if (value.toLowerCase().startsWith('learn')) {
    let replaceLearn = '';

    if (value.startsWith('learn')) {
      replaceLearn = value.replace('learn', '');
    } else if (value.startsWith('Learn')) {
      replaceLearn = value.replace('Learn', '');
    }

    const splitMessage = replaceLearn.split('/');

    if (!customAnswers[splitMessage[0]]) {
      customAnswers[splitMessage[0].toLowerCase().replace(/ /g, "").replaceAll('?', "").replaceAll("'", '')] = [splitMessage[1].trimStart()];
    } else {
      customAnswers[splitMessage[0].toLowerCase().replace(/ /g, "").replaceAll('?', "").replaceAll("'", '')].push(splitMessage[1].trimStart());
    }

    localStorage.setItem('customAnswers', JSON.stringify(customAnswers));

  } else if (!customAnswers[message] === false) {

    messages.push(value);
    messages.push(random(customAnswers[message]));

  } else if (!answer) {

    messages.push(value);
    messages.push(`Sorry but I can't understand what you said`);

  } else {

    messages.push(value);
    messages.push(random(answer));

  }

  renderMessages();
  messageInput.value = '';
}


function renderMessages() {
  messagesDiv.innerHTML = '';

  for (let i=0;i<messages.length;i++) {
    if (i % 2 === 0) {
      messagesDiv.innerHTML += `<p class="sentMessage messages">${messages[i]}</p>`;
    } else {
      messagesDiv.innerHTML += `<p class="receivedMessage messages">${messages[i]}</p>`;
    }
  }
}



function help() {
  if (helpDiv.classList.contains('off')) {
    helpDiv.classList.replace('off', 'on');
    helpDiv.innerHTML = `
      <p class="helpMenu">Help Menu</p>
      <ul>
        <li><p class="tip">to teach RoboBot write: learn theMessage / hisResponse</p></li>
      </ul>
    `
  } else {
    helpDiv.classList.replace('on', 'off');
    helpDiv.innerHTML = ''
  }
}



function deleteData() {
  customAnswers = {};
  localStorage.removeItem('customAnswers');
}
