function decorateAccordion(el) {
    const titles = el.querySelectorAll(':scope > div:nth-child(odd)');
    console.log(titles)
    const childCounttitles = titles[0].children
    console.log(childCounttitles)
    titles[0].classList.add('banner-block-container')
    Array.from(childCounttitles).forEach((item,index)=>{
        if(index === 1){
            item.classList.add('item-text')
        }else{
            item.classList.add('item-image')
        }
    })
    // titles[0].firstElementChild.classLisst.add('item-text')
    // titles[0].lastElementChild.classLisst.add('item-image')
       // const content = titles.querySelectorAll(':scope > div:nth-child(odd)')
    // console.log(content)
    // titles.forEach((title) => {
    //   // Add a class to the title container
    //   title.classList.add('item-text');
    //   // Remove the empty div
    //   title.querySelector(':scope > div:last-of-type').remove();
    //   // Add a class to the content
    //   title.nextElementSibling.classList.add('item-image');
    //   // Add a click handler to open the content
    // //   title.addEventListener('click', () => {
    // //     title.classList.toggle('open');
    // //   });
    // });
  }
  
  const els = document.querySelectorAll('.banner');
  els.forEach((el) => {
    decorateAccordion(el);
  });
  