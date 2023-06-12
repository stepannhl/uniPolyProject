const data = {
    isBoldOutline: false,
    current: 0,
    phrases: [
        { ru: 'Привычка - вторая натура', eng: 'Consuetudo est altera natura' },
        { ru: 'Заметьте хорошо!', eng: 'Nota bene' },
        { ru: 'Беда не приходит одна', eng: 'Nulla calamitas sola' },
        { ru: 'Через тернии к звёздам', eng: 'Per aspera ad astra' },
    ]
}

const phraseList = document.querySelector('.phrase_list');
const controlsContainer = document.querySelector('.controls');

const addControl = controlsContainer.querySelector(".add_control");
const outlineControl = controlsContainer.querySelector('.outline_control');
const resetControl = controlsContainer.querySelector('.reset_control');

const add = () => {
    const { phrases, current } = data;

    if (current === phrases.length) 
    {
        alert("Фразы закончились!");
        return;
    }

    const phrase = document.createElement("div");
    phrase.classList.add("phrase");
    phrase.textContent = `${current + 1} ${phrases[current]?.ru}`;

    if (current % 2 === 0)
        phrase.classList.add("odd");
    else 
        phrase.classList.add("even");

    const subPhrase = document.createElement("div");
    subPhrase.classList.add("sub_phrase");
    subPhrase.textContent = `> ${phrases[current]?.eng}`;

    phrase.appendChild(subPhrase);

    phraseList.appendChild(phrase);

    data.current += 1;

    return phrase;
}

const setOutline = () => {
    const phrases = phraseList;

    if (!data.isBoldOutline) {
        phrases.style.fontWeight = 900;
        data.isBoldOutline = true;
    }
    else {
        phrases.style.fontWeight = 300;
        data.isBoldOutline = false;
    }
}

const reset = () => {
    data.current = 0;
    data.isBoldOutline = false;
    phraseList.innerHTML = '';
}

addControl.addEventListener('click', add);
outlineControl.addEventListener('click', setOutline);
resetControl.addEventListener('click', reset);