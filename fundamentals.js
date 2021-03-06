(function() {
    "use strict";
    function changePrintBasedOnDate() {
        var today = new Date();
        var todayInWeek = today.getDay();
        switch (todayInWeek) {
            case 0:
                return "NSLog(@\"Why am I coding on Sundays?\");";
            case 1:
                return "Console.WriteLine(\"Minghao Liu, Software Developer\");";
            case 2:
                return "printf(\"Minghao Liu, Software Developer.\");";
            case 3:
                return "std::cout << \"Minghao Liu, Software Developer\" << std::endl;";
            case 4:
                return "print \"Minghao Liu, Software Developer\"";
            case 5:
                return "System.<i>out</i>.println(\"Minghao Liu, Software Developer\");";
            case 6:
                return "console.log(\"Minghao Liu, Software Developer\");";
            default:
                return "echo \"PHP Sucks -- Minghao Liu\";";
        }
    }

    function sleep(seconds) {
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

    $(document).ready(function() {
        $(function() {
            var today = new Date();
            var todayInWeek = today.getDay();
            var ctType = todayInWeek === 3 ? "text" : "html";
           $("#descriptive").typed({
               strings: [changePrintBasedOnDate()],
               typeSpeed: 2,
               showCursor: false,
               contentType: ctType
           });
        });
        $(".editable").each(function() {
            this.contentEditable = true;
        });
        $(".insideCell").click(function (event){		
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });

        var pressTimer = 0;

        $(".verySpecial").click(function() { return false;});
        $(".verySpecial").mouseup(function(){
          clearTimeout(pressTimer);
          // Clear timeout
          return false;
        }).mousedown(function() {
          // Set timeout
          pressTimer = window.setTimeout(function() { window.alert("kkk"); }, 3000);
          return false; 
        });

        $('.resizableImg').hover(makeBigger, returnToOriginalSize);

        function makeBigger() {
            $(this).stop(true, true).animate({height: '+=10px', width: '+=10px'}, 500);
        }
        function returnToOriginalSize() {
            $(this).stop(true, true).animate({height: "-=10px", width: "-=10px"}, 500);
        }

        var profileHeight = $(".profileDiv").height();
        var technicalHeight = $(".technicalDiv").height();
        var projectsHeight = $(".projectsDiv").height();
        var educationHeight = $(".educationDiv").height();
        var experienceHeight = $(".experienceDiv").height();

        var curColCount = 0;
        var profCount = 0;
        var techCount = 0;
        var projCount = 0;
        var educCount = 0;
        var expeCount = 0;

        $(".dropdown2.collapse").click(function() {
            var $div1 = $(".profileDiv");
            if ($div1.height() == profileHeight)
                $div1.animate({opacity: '0', width: '0%', height: '0%', padding: '0', margin: '0'}, 1500);
            curColCount ++;
            profCount = curColCount;
            if (profCount == 5 && techCount == 1 && projCount == 3 && educCount == 2 && 
                    expeCount == 4) {
                $("#buttonsDiv").animate({opacity: '0'});
                $("#maintanenceDiv").animate({opacity: '0'});
                $("#descriptDiv").animate({opacity: '0'});
                $("#topbar").animate({opacity: '0'});
                document.getElementById("specialDivForYou").innerHTML +=
                "<center> <p class=\"descr\"> My cutest, see, there is only you and me on this page." + 
                "&nbsp;It took me three hours to make this \"surprise\", the biggest \"Easter Egg\" I have ever made. For some reason I cannot type Chinese onto this website," + 
                "&nbsp;but remember, I have said this to myself so many times. I will say this to you again, now.</p> </center>" +
                "<center> <p class=\"sofamore\"> LXZ, I love YOU! </p> </center>";
            }
         });

        $(".dropdown2.expand").click(function() {
            var $div2 = $(".profileDiv");
            if ($div2.height() != profileHeight)
                $div2.animate({opacity: '1', width: '100%', height: profileHeight, paddingBottom: '50px'}, 1500);
            curColCount --;
            profCount = 0;
         });

        $(".dropdown3.collapse").click(function() {
            var $div3 = $(".technicalDiv");
            $div3.animate({opacity: '0', width: '0%', height:'0%', padding: '0', margin: '0'}, 1500);
            curColCount ++;
            techCount = curColCount;
         });

        $(".dropdown3.expand").click(function() {
            var $div4 = $(".technicalDiv");
            $div4.animate({opacity: '1', width: '100%', height: technicalHeight, paddingBottom: '50px'}, 1500);
            curColCount --;
            techCount = 0;
         });

        $(".dropdown4.collapse").click(function() {
            var $div5 = $(".projectsDiv");
            $div5.animate({opacity: '0', width: '0%', height: '0%', padding: '0', margin: '0'}, 1500);
            curColCount ++;
            projCount = curColCount;
         });

        $(".dropdown4.expand").click(function() {
            var $div6 = $(".projectsDiv");
            $div6.animate({opacity: '1', width: '100%', height: projectsHeight, paddingBottom: '50px'}, 1500);
            curColCount --;
            projCount = 0;
         });

        $(".dropdown5.collapse").click(function() {
            var $div7 = $(".educationDiv");
            $div7.animate({opacity: '0', width: '0%', height: '0%', padding: '0', margin: '0'}, 1500);
            curColCount ++;
            educCount = curColCount;
         });

        $(".dropdown5.expand").click(function() {
            var $div8 = $(".educationDiv");
            $div8.animate({opacity: '1', width: '100%', height: educationHeight, paddingBottom: '50px'}, 1500);
            curColCount --;
            educCount = 0;
         });

        $(".dropdown6.collapse").click(function() {
            var $div9 = $(".experienceDiv");
            $div9.animate({opacity: '0', width: '0%', height: '0%', padding: '0', margin: '0'}, 1500);
            curColCount ++;
            expeCount = curColCount;
         });

        $(".dropdown6.expand").click(function() {
            var $div10 = $(".experienceDiv");
            $div10.animate({opacity: '1', width: '100%', height: experienceHeight, paddingBottom: '50px'}, 1500);
            curColCount --;
            expeCount = 0;
         });

    });
})();