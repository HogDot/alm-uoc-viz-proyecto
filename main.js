const contentItems = [
  { type: 'text', content: 'Have you ever thought\nabout how many people play chess\n in your country?' },
  { type: 'iframe', src: 'world_players_c.html' },
  { type: 'text', content: 'Have you considered\nhow many of them are women?' },
  { type: 'iframe', src: 'player_gender_gap.html' },
  { type: 'text', content: 'Let\'s explore why we see such a gender gap.\nCould discrimination be the cause?' },
  { type: 'iframe', src: 'discrimination_gender_gap.html' },
  { type: 'text', content: 'Or maybe it is due to\ndifferences in education?' },
  { type: 'iframe', src: 'education_gender_gap.html' },
  { type: 'text', content: 'If differences in education and discrimination\ndo not drive differences in chess participation,\nwhat does?' },
  { type: 'image', src: 'commentator_sexist.png', alt: 'Could not load image' },
  { type: 'image', src: 'chess_popular_but_girls_left_behind.png', alt: 'Could not load image' },
  { type: 'image', src: 'women_letter_fide.png', alt: 'Could not load image' },
  { type: 'text', content: 'It seems that what women are saying is\nthat they face sexism and sexual abuse\nin the chess world.' },
  { type: 'text', content: 'Let\'s hold that thought.\nLet\'s take a look at the rating gap between men and women' },
  { type: 'iframe', src: 'fide_rating_gap.html' },
  { type: 'text', content: 'Now, let\'s look at the same data\nfor players with at least 10 rated games' },
  { type: 'iframe', src: 'fide_rating_gap_k20.html' },
  { type: 'text', content: 'Unfortunately, FIDE only provides\na proxy for 10 rated games' },
  { type: 'text', content: 'We know many women drop out before 10 games.\nThe data doesn\'t let us find out\nwhether they keep dropping out afterward.' },
  { type: 'text', content: 'In conclusion:\na large portion of the rating gap is\ncertainly caused by women dropping out of chess.\nIt is unclear whether this is the whole cause of the rating gap' },
  { type: 'text', content: 'What if the focus were on the gender gap, instead of the rating gap?\nPerhaps we wouldn\'t need to talk about this today.' },
];

let currentIndex = 0;
const wrapper = document.getElementById('visualization-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateContent(newIndex) {
  const currentItem = contentItems[newIndex];
  wrapper.innerHTML = '';

  if (currentItem.type === 'iframe') {
    const newIframe = document.createElement('iframe');
    newIframe.src = currentItem.src;
    newIframe.id = 'iframe-display';
    newIframe.classList.add('fullsize-iframe');
    wrapper.appendChild(newIframe);
  } else if (currentItem.type === 'text') {
    const textSlide = document.createElement('div');
    textSlide.classList.add('text-slide');
    textSlide.textContent = currentItem.content;
    wrapper.appendChild(textSlide);
  } else if (currentItem.type === 'image') {
    const imgSlide = document.createElement('img');
    imgSlide.src = currentItem.src;
    imgSlide.alt = currentItem.alt;
    imgSlide.classList.add('image-slide');
    wrapper.appendChild(imgSlide);
  }

  currentIndex = newIndex;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === contentItems.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    updateContent(currentIndex - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < contentItems.length - 1) {
    updateContent(currentIndex + 1);
  }
});

updateContent(currentIndex);
