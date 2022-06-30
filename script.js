const config = {
    title: "Marketing supports all company strategic priorities and you have a big part to play!",
    question: "Please can you give us an example of how you are supporting the company strategy below:",
    submit: "Submit",
    thanks: "Thank you for your submission, click the “Next Video” button to proceed now.",
    celebrationImg_on: true,
    celebration_image: "https://a.storyblok.com/f/112136/205x150/12867bb205/sporting-hero.png",
    placeholder_text: "Type your answer here",
    image_on: true,
    image: "https://a.storyblok.com/f/112136/130x160/731788149f/avatar_matt-owen.png",
}

const title = document.getElementById('title');
const question = document.getElementById('question');
const submit = document.getElementById('submit');
const thanks = document.getElementById('thankYou');
const textArea = document.getElementById('textArea');
const celebration = document.getElementById('celebrationContainer');
const celebrationImg = document.getElementById('celebration');
const image = document.getElementById('image');
const headerContainer = document.getElementById('headerContainer')

title.textContent = config.title
question.textContent = config.question
submit.textContent = config.submit
thanks.textContent = config.thanks
textArea.placeholder = config.placeholder_text

if (config.celebrationImg_on === true) {
    celebrationImg.src = config.celebration_image
} else {
    celebrationImg.style.display = 'none';
}

if (config.image_on === true) {
    image.src = config.image
} else {
    image.style.display = "none";
}

const finished = () => {
    if (textArea.value.length >= 2) {
        textArea.style.display = 'none';
        celebration.style.display = 'flex';
        celebration.style.marginTop = '2rem';
        submit.style.display = 'none';
        headerContainer.style.opacity = '0';
        headerContainer.style.pointerEvents = 'none';
    } else {
        submit.textContent = 'Please add more detail to your answer.'
        setTimeout(() => {
            submit.textContent = config.submit
        }, 2500);
    }
}

submit.addEventListener('click', finished)