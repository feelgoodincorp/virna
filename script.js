
$( document ).ready(function() {

//______setting animations
 const textOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }

    const textObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target

                element.classList.add('toAnimate');
                console.log(element)
                //element.style.background = 'deepskyblue'
                textObserver.unobserve(element)
            }
        })
    }, textOptions)

    const textArr = document.querySelectorAll('.animatedText')
    textArr.forEach(i => {
       textObserver.observe(i)
    })

     const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target

                element.classList.add('toAnimate');
                console.log(element)
                //element.style.background = 'deepskyblue'
                observer.unobserve(element)
            }
        })
    }, options)

    const arr = document.querySelectorAll('.animatedImage')
    arr.forEach(i => {
       observer.observe(i)
    })



    //calculating num of symbols for adaptive span
	let width = window.screen.width;
	let text = document.querySelector('.line').textContent;

	const maxMobileWidth = 960;
	const desktopSplitSize = 45;
	const mobileSplitSize = 40;
	let chunks;

    if(width > maxMobileWidth){
    	 chunks = splitText(text, desktopSplitSize);
    }else{
    	chunks = splitText(text, mobileSplitSize);
    }

    for (var i = chunks.length - 1; i >= 0; i--) {
		document.querySelector('.target-text').insertAdjacentHTML('afterbegin', '<span class="animatedText">' + chunks[i] + '</span>');
    }

    $('.target-text').children().last().css({"display": "none"});
});


  function splitText(string, splitSize){
    	const numChunks = Math.ceil(string.length / splitSize)
  		const chunksArray = new Array(numChunks)
  		for (let i = 0, o = 0; i < numChunks; ++i, o += splitSize) {
  		  chunksArray[i] = string.substr(o, splitSize);
  		}
  		return chunksArray;
    }
