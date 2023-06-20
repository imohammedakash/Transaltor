const selectTag = document.querySelectorAll('select'),
    translatebtn = document.querySelector(".translate"),
    translateFrom = document.querySelector('.from-text'),
    translateTo = document.querySelector('.to-text');
selectTag.forEach(tag => {

    for (const country_code in countries) {
        let selected;
        if (tag.id == 1 && country_code == "en-GB") {
            selected = "selected";
        }
        else if (tag.id == 2 && country_code == "hi-IN") {

            selected = "selected";
        }
        const option = `<option value='${country_code}' ${selected}>${countries[country_code]}`;
        tag.insertAdjacentHTML('beforeend', option);
    }

});

translatebtn.addEventListener('click', () => {
    let text = translateFrom.value;
    const translatefromText = selectTag[0].value;
    const translateTotext = selectTag[1].value;

    let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefromText}|${translateTotext}`;
    fetch(apiURL).then(res => res.json()).then(data => {
        console.log(data);
        translateTo.value = data.responseData.translatedText;
    
      })

});