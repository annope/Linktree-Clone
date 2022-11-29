const shareButtons = document.querySelectorAll('.tile-share-button');
const otherButton = document.querySelectorAll('.share-button');
console.log(otherButton)
console.log(shareButtons)

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));
otherButton.forEach(whiteButton => whiteButton.addEventListener('click', copyText));

async function copyText(e){
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link);
        alert("Copied the text: "+ link);

    } catch (err){
        console.log(err)
    }
}

