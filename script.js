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