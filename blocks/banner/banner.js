function decorateAccordion(el) {
    const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
    console.log(titles)
    titles.forEach((title) => {
      // Add a class to the title container
      title.classList.add('item-text');
      // Remove the empty div
      title.querySelector(':scope > div:last-of-type').remove();
      // Add a class to the content
      title.nextElementSibling.classList.add('item-image');
      // Add a click handler to open the content
    //   title.addEventListener('click', () => {
    //     title.classList.toggle('open');
    //   });
    });
  }
  
  const els = document.querySelectorAll('.accordion');
  els.forEach((el) => {
    decorateAccordion(el);
  });
  