/*
MIT License

Copyright (c) 2024 Samuel Krebs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.onload = function(){

    var gameplay = 0;
    var graphics = 0;
    var audio = 0;
    var performance = 0;
    var price = 0;

    const ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
        const rating_items = document.querySelectorAll("#rating-item-" + rating.getAttribute("data-rate"));
        rating.onclick = e => {
            if(!e.target.classList.contains('rating-text')){
                if(!e.target.classList.contains('rating-item')){
                    if(!e.target.classList.contains('rating')){
                        if(!e.target.classList.contains('rating-active')){
                            rate = e.target.getAttribute("data-rate");

                            for (var item = 0; item < rate; item++) {
                                rating_items[item].classList.add('ph-fill');
                                rating_items[item].classList.remove('ph-light');
                            }
    
                            for(var item= 4; item >= rate; item--){
                                rating_items[item].classList.remove('ph-fill');
                                rating_items[item].classList.add('ph-light');
                            }

                            if(rating.getAttribute("data-rate") == "gameplay"){
                                gameplay = rate;
                            }else if(rating.getAttribute("data-rate") == "graphics"){
                                graphics = rate;
                            }else if(rating.getAttribute("data-rate") == "audio"){
                                audio = rate;
                            }else if(rating.getAttribute("data-rate") == "performance"){
                                performance = rate;
                            }else if(rating.getAttribute("data-rate") == "price"){
                                price = rate;
                            }
                        }
                    }
                }
            }
        };
    });

    const button = document.querySelector("#copyRatingButton")
    button.onclick = e => {
        var a = [gameplay,graphics,audio,performance,price];
        var average_rating = eval(a.join('+'))/a.length;
        var rateText = document.getElementById("text").value;

        if(rateText == ""){
            var template = 
            "♦ GAMEPLAY → " + gameplay + "/5" + "\n"
            + "♦ GRAPHICS → " + graphics + "/5" + "\n"
            + "♦ AUDIO → " + audio + "/5" + "\n"
            + "♦ PERFORMANCE → " + performance + "/5" + "\n"
            + "♦ PRICE → " + price + "/5" + "\n\n"
            + "Overall: " + average_rating + "/5" + "\n\n"
            + "Made with Reviewificator 2.0  ►  https://reviewificator.skre.dev";
        }else{
            var template =
            rateText + "\n\n"
            + "♦ GAMEPLAY → " + gameplay + "/5" + "\n"
            + "♦ GRAPHICS → " + graphics + "/5" + "\n"
            + "♦ AUDIO → " + audio + "/5" + "\n"
            + "♦ PERFORMANCE → " + performance + "/5" + "\n"
            + "♦ PRICE → " + price + "/5" + "\n\n"
            + "Overall: " + average_rating + "/5" + "\n\n"
            + "Made with Reviewificator 2.0  ►  https://reviewificator.skre.dev";
        }

        console.log(template);
        navigator.clipboard.writeText(template);

        button.innerHTML = 'Copied successfully';
        setTimeout(function(){
            button.innerHTML = '<i class="ph-fill ph-copy"></i> Copy your rating';
        }, 2000)
    }

};