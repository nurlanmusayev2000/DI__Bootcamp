let slideArr = [{
        img: "https://media.cnn.com/api/v1/images/stellar/prod/220920084557-02-azerbaijan-hiking-mt-shahdag.jpg?c=original&q=h_618,c_fill",
        nameOfPlace: "Khinalig , Quba",
        about: "It is located just south-west of Quba in the middle of the Greater Caucasus mountains that divide Russia and the South Caucasus. Khinalug is also the highest, most remote and isolated village in Azerbaijan and among the highest in the Caucasus. The weather changes dramatically during summer and winter, ranging from −20 °C to 18 °C. Khinalug has a population of about 2,000 people. This small group of people speaks the Khinalug language, which is an isolate within the Northeast Caucasian language family, although many speak Azerbaijani as well"

    },
    {
        img: "https://azerbaijan.travel/fit1600x900/center/pages/250/c5c1186d-731c-4fab-a44c-6cebaae00d62.jpg",
        nameOfPlace: "Göygöl (lit.'Blue Lake')",
        about: "Göygöl (lit.'Blue Lake') is a natural impounded lake in Azerbaijan. It is situated at the footsteps of Murovdag, not far from Ganja in the Goygol District.[2] It is one of the largest lakes in Azerbaijan. The lake is 0.78 km2 and is 1553.3 metres above sea level. Its length from south to north is 2800 metres, and its maximum width is 800 metres"
    },
    {
        img: "https://testour.az/uploads/1571816491hMa9-o.jpg",
        nameOfPlace: "Mud Volcanos in Azerbaijan",
        about: "Azerbaijan has the most mud volcanoes of any country, spread broadly across the country. 350 of the 700 volcanoes of the world are in the Azerbaijani Republic.[1] Local people call them “yanardagh” (burning mountain), “pilpila” (terrace), “gaynacha” (boiling water) and “bozdag” (grey mountain) alongside its geographical name – mud volcanoes."
    },
    {
        img: "https://mwi.westpoint.edu/wp-content/uploads/2021/07/Shusha_NKR.jpg",
        nameOfPlace: "Susha , Azerbaijan",
        about: "Shusha District  is one of the 66 districts of Azerbaijan. It is located in the west of the country and belongs to the Karabakh Economic Region. The district borders the districts of Khojaly, Lachin, and Khojavend. Its capital and largest city is Shusha. As of 2020, the district had a nominal population of 34,700."
    }
];
let i = 0
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let imgSlide = document.querySelector(".img");
let imgTitle = document.querySelector(".titleImg")
let aboutImg = document.querySelector(".aboutImages");

imgSlide.setAttribute("src", slideArr[i].img);
imgTitle.innerText = slideArr[i].nameOfPlace;
aboutImg.innerText = slideArr[i].about;

function nextSlide() {
    i++
    // imgSlide.getAttribute("src", slideArr[i].img);
    imgSlide.setAttribute("src", slideArr[i].img);
    imgTitle.innerText = slideArr[i].nameOfPlace;
    aboutImg.innerText = slideArr[i].about;
    if (i == slideArr.length - 1) {
        i = -1
    }
}

function prevSlide() {

    if (i <= 0) {
        i = slideArr.length
    }
    i--
    imgSlide.setAttribute("src", slideArr[i].img);
    imgTitle.innerText = slideArr[i].nameOfPlace;
    aboutImg.innerText = slideArr[i].about;
}