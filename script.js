document.getElementById("text1").innerHTML = "تسجيل الدخول";
document.getElementById("text2").innerHTML = "اعرف المزيد";
document.getElementById("text3").innerHTML = "الأزمة الصامتة";

const shortText = 'تسلب عمالة الأطفال 152 مليون طفل طفولتهم وتعليمهم ومستقبلهم إنها تؤثر على نموهم الجسدي والعقلي وتديم دورات الفقر وتحرمهم من الحقوق الأساسية يعمل هؤلاء الأطفال في ظروف خطرة ويفوتون التعليم ويفقدو';

const fullText = 'تسلب عمالة الأطفال 152 مليون طفل طفولتهم وتعليمهم ومستقبلهم إنها تؤثر على نموهم الجسدي والعقلي وتديم دورات الفقر وتحرمهم من الحقوق الأساسية يعمل هؤلاء الأطفال في ظروف خطرة ويفوتون التعليم ويفقدون فرصة بناء حياة أفضل. هذه الظاهرة تؤثر على المجتمعات بأكملها وتعيق التنمية المستدامة';

document.getElementById("text4").innerHTML = shortText;
document.getElementById("text5").innerHTML = "↓ اقرأ المزيد";

let isExpanded = false;

document.getElementById("text5").addEventListener("click", function() {
    if (isExpanded) {

        document.getElementById("text4").innerHTML = shortText;
        document.getElementById("text5").innerHTML = "↓ اقرأ المزيد";
        isExpanded = false;
    } else {
        document.getElementById("text4").innerHTML = fullText;
        document.getElementById("text5").innerHTML = "↑ اقرأ أقل";
        isExpanded = true;
    }
});

document.getElementById("text6").innerHTML = "الإحصائيات تشرح الواقع";
document.getElementById("text7").innerHTML = "عماله الاطفال تسلب 1.6 مليون طفل من طفولتهم من ما يعادل 9% من الاطفال فى مصر";
document.getElementById("text8").innerHTML = `الزراعة 62%
الخدمات 18%
الصناعة 14%`;

document.getElementById("text9").innerHTML = "الأرقام تحكي القصة";

const section4Cards = [{
        icon: "Assets/danger icon.svg",
        title: "70%",
        description: "يعملون في ظروف خطرة"
    },
    {
        icon: "Assets/people icon.svg",
        title: "1 من كل 11",
        description: "طفل يعمل فى مصر"
    },
    {
        icon: "Assets/uil_18-plus.svg",
        title: "4.05%",
        description: "من الاطفال اقل من 18"
    }
];
const cardsContainer = document.querySelector('.sec4_div2');

if (cardsContainer) {
    cardsContainer.innerHTML = '';

    for (let i = 0; i < section4Cards.length; i++) {
        cardsContainer.innerHTML += `
            <div class="sec4_div3">
                <div class="sec4_div4">
                    <img class="section4_icon" src="${section4Cards[i].icon}" alt="">
                    <div class="sec4_div5">
                        <h2>${section4Cards[i].title}</h2>
                        <h4>${section4Cards[i].description}</h4>
                    </div>
                </div>
            </div>
        `;
    }
}
document.getElementById("text10").innerHTML = "محمود عبد العال";
document.getElementById("text11").innerHTML = `بدأ محمود وعبد العال العمل قبل سن الخامسة عشرة، وهو ما يعد انتهاكًا للمادة 64 من قانون الطفل. تنص المادة 97 من نفس القانون على تشكيل "لجنة عامة لحماية الطفولة" في كل محافظة.`;
document.getElementById("text12").innerHTML = "اعرف المزيد";
document.getElementById("text13").innerHTML = "قصص من الواقع";
document.getElementById("text14").innerHTML = "@2025. جميع الحقوق محفوظة";
document.getElementById("text15").innerHTML = "سياسة الخصوصية";
document.getElementById("text16").innerHTML = "شروط الخدمة";