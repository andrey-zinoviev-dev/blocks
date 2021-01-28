const servicesBlock = document.querySelector('.services');
const blocks = Array.from(document.querySelectorAll('.services__service'));
const slides = document.querySelector('.slides');
//потом переделать вставку картинок для слайдера через класс Section

// pics.forEach((pic) => {
//     const slide = new Picture('#picture', pic.service, pic.link);
//     const finalSLide = slide._fillTemplate();
//     slides.append(finalSLide);
// })
function showBgColor (block) {
    switch (getComputedStyle(block).backgroundColor) {
        case "rgb(52, 198, 87)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(37, 26, 201, 0.8)");
            break;
        case "rgb(31, 78, 121)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(28, 184, 137, 0.8)");
            break;
        case "rgb(69, 105, 207)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(8, 150, 114, 0.8)");
            break;
        case "rgb(34, 139, 192)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(74, 181, 122, 0.8)");
            break;
        case "rgb(2, 252, 157)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(8, 53, 189, 0.8)");
            break;
        case "rgb(91, 155, 213)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(28, 184, 137, 0.8)");
            break;
        case "rgb(127, 205, 221)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(28, 184, 137, 0.8)");
            break;
        case "rgb(130, 238, 171)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(37, 6, 209, 0.8)");
            break;
        case "rgb(111, 211, 135)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(19, 12, 207, 0.8)");
            break;
        case "rgb(85, 205, 211)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(10, 145, 30, 0.8)");
            break;
        case "rgb(1, 187, 76)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(17, 9, 230, 0.8)");
            break;
        case "rgb(16, 192, 112)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(71, 18, 196, 0.8)");
            break;
        case "rgb(1, 133, 83)":
            servicesBlock.style.setProperty('--services-bg-variable', "rgba(37, 26, 201, 0.8)");
    }
    
    // if(getComputedStyle(block).backgroundColor === "rgb(31,78,121)") {
    //     servicesBlock.classList.toggle('green-bg')
    // }
    // if(getComputedStyle(block).backgroundColor === "rgb(69,105,207)") {
    //     servicesBlock.classList.add('light-green-bg');
    // }
    // if(getComputedStyle(block).backgroundColor === "rgb(34,139,192)") {
    //     servicesBlock.classList.add('darker-green-bg');
    // }
}
function hideBgColor () {
    servicesBlock.style.setProperty('--services-bg-variable', "white");
}
blocks.forEach((block) => {
    block.addEventListener('mouseover', (evt) => {
        showBgColor(evt.target);
    })
    block.addEventListener('mouseout', hideBgColor);
})