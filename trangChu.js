// var questionAPI = ' http://localhost:3000/questionAndAnswer';

var questionAndAnswer = [
    {
        id : 1,
        price : "$ 100",
        question : "Ngôn ngữ được sử dụng chinh của Vương Quốc Anh là ngôn ngữ nào sau đây ?",
        answer1 : "A : Tiếng Anh",
        answer2 : "B : Tiếng Pháp",
        answer3 : "C : Tiếng Mỹ",
        answer4 : "D : Tiếng Đức",
        answerTrue : "A"
    },
    {
        id : 2,
        price : "$ 200",
        question : "Con cò bé bé / Nó đậu cành tre / Đi không hỏi mẹ / biết đi đường nào , là câu hát trong bài thiếu nhi nào ?",
        answer1 : "A : Mẹ yêu không nào",
        answer2 : "B : Chim mẹ và chim con",
        answer3 : "C : Đồng dao con cò",
        answer4 : "D : Cánh chim tuổi thơ",
        answerTrue : "A"
    },
    {
        id : 3,
        price : "$ 300",
        question : "Điền từ vào chỗ trống : Mạnh vì ... ,bạo vì tiền ?",
        answer1 : "A : Lúa",
        answer2 : "B : Gạo",
        answer3 : "C : Xã hội",
        answer4 : "D : Anh em",
        answerTrue : "B"
    },
    {
        id : 4,
        price : "$ 500",
        question : "Đâu là tên ngôi làng được đúc hoàn toàn bằng đồng tại Việt Nam ?",
        answer1 : "A : Chùa 1 cột",
        answer2 : "B : Chùa Hương",
        answer3 : "C : Chùa Đồng",
        answer4 : "D : Chùa Tam Chúc",
        answerTrue : "C"
    },
    {
        id : 5,
        price : "$ 1 000",
        question : "Điền từ vào chỗ trống : Cây ngay không sợ ... ?",
        answer1 : "A : Thằng nào",
        answer2 : "B : Chết đứng",
        answer3 : "C : Chịu thiệt",
        answer4 : "D : Ai hết",
        answerTrue : "B"
    },
    {
        id : 6,
        price : "$ 2 000",
        question : "Bán buôn bán lẻ là phạm trù của nghành nào ?",
        answer1 : "A : Thương nghiệp",
        answer2 : "B : Kinh doanh",
        answer3 : "C : Bất Động Sản",
        answer4 : "D : Hàng hóa",
        answerTrue : "A"
    },
    {
        id : 7,
        price : "$ 4 000",
        question : "Khả năng đặc biệt có thể làm cho người khác bị mê gọi là ?",
        answer1 : "A : Lừa đảo",
        answer2 : "B : Yểm bùa",
        answer3 : "C : Tình yêu",
        answer4 : "D : Thôi miên",
        answerTrue : "D"
    },
    {
        id : 8,
        price : "$ 8 000",
         question : "Trống đánh thật khỏe, đuốc lóe thật nhanh quạt khắp xa gần ,nước văng tung tóe là gì?",
        answer1 : "A : Tưới cây",
        answer2: "B : Sấm chớp mưa",
        answer3 : "C : Rửa xe",
        answer4 : "D : Đi tắm",
        answerTrue : "B"
    },
    {
        id : 9,
        price : "$ 16 000",
        question : "Đầu nhẹ bụng nặng,có hình bán nguyệt trơn tru không thể ngã là con gì ?",
        answer1 : "A : Con voi",
        answer2 : "B : Con quay",
        answer3 : "C : Lật Đật",
        answer4 : "D : Con vịt",
        answerTrue : "C"
    },
    {
        id : 10,
        price : "$ 32 000",
        question : "Sau chiến tranh thế giới thứ 2, phong trào giải phóng dân tộc nổi lên mạnh ở đâu nhất ?",
        answer1 : "A : Châu Á",
        answer2 : "B : Châu Âu",
        answer3 : "C : Nam Mĩ",
        answer4 : "D : Châu Phi",
        answerTrue : "D"
    },
    {
        id : 11,
        price : "$ 64 000",
        question : "Phương tiện nào sau đây ít giống với các phương tiện còn lại ?",
        answer1 : "A : Máy Bay",
        answer2 : "B : Xe máy",
        answer3 : "C : Xe đạp",
        answer4 : "D : Oto",
        answerTrue : "A"
    },
    {
        id : 12,
        price : "$ 125 000",
        question : "Miền núi có các vành đai thực vật theo độ cao,phong phú nhất nước ta ?",
        answer1 : "A : Dãy HiMaLaya",
        answer2 : "B : Đèo Hải Vân",
        answer3 : "C : Dãy Hoàng Liên Sơn",
        answer4 : "D : Núi Sapa",
        answerTrue : "C"
    },
    {
        id : 13,
        price : "$ 250 000",
        question : "Ủy ban nhân dân xã do ai bầu ra ?",
        answer1 : "A : Người có thẩm quyền",
        answer2 : "B : Ai cũng bầu được",
        answer3 : "C : Người trong nhà nước",
        answer4 : "D : Hội đồng nhân dân",
        answerTrue : "D"
    },
    {
        id : 14,
        price : "$ 500 000",
        question : "Lần đầu tiên nước ta dùng bộc phá 1000 kg thuốc nổ đánh giặc là ở đâu ?",
        answer1 : "A : Lào Cai",
        answer2 : "B : Điện Biên Phủ",
        answer3 : "C : Yên Bái",
        answer4 : "D : Sài Gòn",
        answerTrue : "B"
    },
    {
        id : 15,
        price : "$ 1 000 000",
        question : "Quốc kỳ nào giống hệt quốc kỳ Indonexia nhưng ngược chiều ?",
        answer1 : "A : Ba Lan",
        answer2 : "B : Pháp",
        answer3 : "C : Đức",
        answer4 : "D : Úc",
        answerTrue : "A"
    }
];


function timesSound(){
    if(document.getElementById("nhac_nen").src = "#"){
        document.getElementById("nhac_nen").src = "sounds/nhac_nen.mp3";
    }
    document.getElementById("nhac_nen").src = "#";
}




var questionPerPage= 1;
var currentPage = 1;
var start = 0;
var end= questionPerPage;
var totalPage =  Math.ceil(questionAndAnswer.length / questionPerPage);
function renderQuestion() {
    var render = document.getElementById("question_answer");
    var renderPrice = document.getElementById("price");
    var price = questionAndAnswer.map(function(questionAnswer,index) {
        if(index  >= start &&  index < end){
            return `
              <span>${questionAnswer.price}</span>
            `
        }
    })
    renderPrice.innerHTML = price.join("");

    // hiện thị câu hỏi thứ mấy và số tiền
    var countSTT = questionAndAnswer.map(function(questionAnswer,index) {
        if(index  >= start &&  index < end){
            var test = document.getElementsByClassName("column");
            test[index].classList.add("now");
        }
    })


    var exam = questionAndAnswer.map(function(questionAnswer,index) {
        if(index  >= start &&  index < end){
            return `
            
            <table border="5" cellspacing="10" cellpadding="0" class="QS">
            <tr>
                <!-- phân hiển thị câu hỏi -->
                <td colspan="2" id="render_question">
                    ${questionAnswer.question}
                </td>
            </tr>
            <tr>
                <td>
                    <button id="answer1" class="answer" value = "A">
                    ${questionAnswer.answer1}
                    </button>
                </td>
                <td>
                <button id="answer2" class="answer" value = "B">
                ${questionAnswer.answer2}
                </button>
                </td>
            </tr>
            <tr>
                <td>
                <button id="answer3" class="answer" value = "C">
                ${questionAnswer.answer3}
                </button>
                </td>
                <td>
                <button id="answer4" class="answer" value = "D">
                ${questionAnswer.answer4}
                </button>
                </td>
            </tr>
        </table>
    `  
        }
})
render.innerHTML = exam.join("");
}

    


function run() {

    document.getElementById("start_or_noStart").style.display="none";
    document.getElementById("nhac_nen").src = "sounds/chuyen_CT.mp3";
    var renderTime = document.getElementById("countdown");
    renderQuestion();

    var s= 30;
    // count down
    function countDowwn(){
        
        setInterval(function(){
            if(s>=0 && s <= 30){
                renderTime.innerHTML = s--;
                if(renderTime.innerHTML == 27){
                    document.getElementById("nhac_nen").src = "sounds/dem_nguoc_tjoi_gian_tra_loi.mp3";
                }
                else if(renderTime.innerHTML == 0){
                    var choice = confirm("hết giờ");
                    if(choice == 1){
                        window.location = "giaoDien.html";
                    }
                    else{
                        window.location = "giaoDien.html";
                    }

                }
            }
        },1000)
        
    }
    countDowwn();

    var resultsQuestion = questionAndAnswer.map(function(questionAnswer,index){
            if(index >= start && index < end){
                
                var results = document.getElementsByClassName("answer");
                for(var result of results) {
                    result.addEventListener("click",function(){
                        if(this.value == questionAnswer.answerTrue){
                           s="--";
                        //    renderTime.innerHTML = 30;
                            currentPage++;
                            if(currentPage > totalPage){
                                var choice = confirm("Chúc Mừng Bạn Đã Dành Chiến Thắng Game Với Giải Thưởng $ 1 000 000"
                                 + "\n" + + "\n" + "Bạn Có Muốn Chơi Lại Không")
                                 if(choice == 1){
                                    currentPage = 1
                                 }
                            }
 
                            start = (currentPage - 1)*questionPerPage;
                            end  =  (currentPage)*questionPerPage;
                            document.getElementById("renderHelpPeople").style.display = "none";
                            document.getElementById("render_help_family").style.display = "none";
                            document.getElementById("render_help_man").style.display = "none";
                            document.getElementById(this.id).classList.add("active");
                            document.getElementById("nhac_nen").src = "sounds/tra_loi_dung.mp3";
                            setTimeout(function() {
                                document.getElementById("start_or_noStart").style.display="block";
                            },2000)

                        }
                        else{
                            document.getElementById(this.id).classList.add("wrong");
                            document.getElementById("nhac_nen").src = "sounds/tra_loi_sai.mp3";
                            setTimeout(function() {
                                window.location = "giaoDien.html";
                            },4000)
                        }
                    })
                } 
            }
    })
    

}

// quyền trợ giúp từ khán giả trường quay

function helpPeople(){
    document.getElementById("help_people").style.display = "none";
    document.getElementById("render_help_family").style.display = "none";
    var countSTT = questionAndAnswer.map(function(questionAnswer,index) {
        if(index  >= start &&  index < end){
            if(index == 0){
                setTimeout(function() {
                document.getElementById("renderHelpPeople").style.display = "block";
                document.getElementById("answerA").style.height = "180px";
                document.getElementById("answerB").style.height = "30px";
                document.getElementById("answerC").style.height = "50px";
                document.getElementById("answerD").style.height = "70px";
                },1500)
            }else if(index == 1){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "140px";
                    document.getElementById("answerB").style.height = "70px";
                    document.getElementById("answerC").style.height = "98px";
                    document.getElementById("answerD").style.height = "40px";
                },1500)
               
            }else if(index == 2){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "70px";
                    document.getElementById("answerB").style.height = "150px";
                    document.getElementById("answerC").style.height = "98px";
                    document.getElementById("answerD").style.height = "120px";
                },1500)
                
            }else if(index == 3){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "100px";
                    document.getElementById("answerB").style.height = "120px";
                    document.getElementById("answerC").style.height = "12px";
                    document.getElementById("answerD").style.height = "70px";
                },1500)
                
            }else if(index == 4){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "30px";
                    document.getElementById("answerB").style.height = "180px";
                    document.getElementById("answerC").style.height = "35px";
                    document.getElementById("answerD").style.height = "40px";
                },1500)
                
            }else if(index == 5){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "160px";
                    document.getElementById("answerB").style.height = "50px";
                    document.getElementById("answerC").style.height = "78px";
                    document.getElementById("answerD").style.height = "40px";
                },1500)
                
            }else if(index == 6){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "70px";
                    document.getElementById("answerB").style.height = "70px";
                    document.getElementById("answerC").style.height = "98px";
                    document.getElementById("answerD").style.height = "100px";
                },1500)
                
            }else if(index == 7){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "100px";
                    document.getElementById("answerB").style.height = "130px";
                    document.getElementById("answerC").style.height = "98px";
                    document.getElementById("answerD").style.height = "60px";
                },1500)
                
            }else if(index == 8){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "30px";
                    document.getElementById("answerB").style.height = "30px";
                    document.getElementById("answerC").style.height = "180px";
                    document.getElementById("answerD").style.height = "40px";
                },1500)
                
            }else if(index == 9){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "90px";
                    document.getElementById("answerB").style.height = "40px";
                    document.getElementById("answerC").style.height = "100px";
                    document.getElementById("answerD").style.height = "120px";
                },1500)
                
            }else if(index == 10){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "180px";
                    document.getElementById("answerB").style.height = "50px";
                    document.getElementById("answerC").style.height = "48px";
                    document.getElementById("answerD").style.height = "60px";
                },1500)
                
            }else if(index == 11){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "100px";
                    document.getElementById("answerB").style.height = "110px";
                    document.getElementById("answerC").style.height = "120px";
                    document.getElementById("answerD").style.height = "70px";
                },1500)
                
            }else if(index == 12){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "35px";
                    document.getElementById("answerB").style.height = "70px";
                    document.getElementById("answerC").style.height = "98px";
                    document.getElementById("answerD").style.height = "120px";
                },1500)
                
            }else if(index == 13){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "110px";
                    document.getElementById("answerB").style.height = "135px";
                    document.getElementById("answerC").style.height = "98px";
                    document.getElementById("answerD").style.height = "40px";
                },1500)
                
            }else if(index == 14){
                setTimeout(function(){
                    document.getElementById("renderHelpPeople").style.display = "block";
                    document.getElementById("answerA").style.height = "140px";
                    document.getElementById("answerB").style.height = "135px";
                    document.getElementById("answerC").style.height = "122px";
                    document.getElementById("answerD").style.height = "100px";
                },1500)
                
            }
        }
    })
};


// phần trợ giúp từ người thân
function helpFamily(){
   document.getElementById("help_family").style.display = "none";
   document.getElementById("renderHelpPeople").style.display = "none";

    var countSTT = questionAndAnswer.map(function(questionAnswer,index) {
        if(index  >= start &&  index < end){
            if(index == 0){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function() {
               
                document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : A";

                },1500)
            }else if(index == 1){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : A";

                },1500)
               
            }else if(index == 2){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : B";

                },1500)
                
            }else if(index == 3){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : C";

                },1500)
                
            }else if(index == 4){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : B";

                },1500)
                
            }else if(index == 5){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : A";

                },1500)
                
            }else if(index == 6){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : D";

                },1500)
                
            }else if(index == 7){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : B";

                },1500)
                
            }else if(index == 8){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : C";

                },1500)
                
            }else if(index == 9){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : D";

                },1500)
                
            }else if(index == 10){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : A";

                },1500)
                
            }else if(index == 11){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : C";

                },1500)
                
            }else if(index == 12){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : B";

                },1500)
                
            }else if(index == 13){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : B";

                },1500)
                
            }else if(index == 14){
                document.getElementById("render_help_family").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_family").innerHTML = "Tôi Nghĩ Đáp Án Là : A";

                },1500)
                
            }
        }
    })
}

function helpHalf(){
    document.getElementById("help_half").style.display = "none";
    document.getElementById("renderHelpPeople").style.display = "none";
    document.getElementById("render_help_family").style.display = "none";
 
     var countSTT = questionAndAnswer.map(function(questionAnswer,index) {
         if(index  >= start &&  index < end){
             if(index == 0){
                 setTimeout(function() {
                
                //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                //  document.getElementById("answer3").innerHTML = "";
                 document.getElementById("answer4").innerHTML = "";
 
                 },1500)
             }else if(index == 1){
                 setTimeout(function(){
                //  document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                
             }else if(index == 2){
                 setTimeout(function(){
                     document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                //   document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 3){
                 setTimeout(function(){
                      document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                 //  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 4){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 5){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                 //  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 6){
                 setTimeout(function(){
                     //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                //   document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 7){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 8){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                 //  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 9){
                 setTimeout(function(){
                     document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                 //  document.getElementById("answer3").innerHTML = "";
                //   document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 10){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 11){
                 setTimeout(function(){
                     //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                 //  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 12){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                //   document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 13){
                 setTimeout(function(){
                     //  document.getElementById("answer1").innerHTML = "";
                //  document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                  document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }else if(index == 14){
                 setTimeout(function(){
                    //  document.getElementById("answer1").innerHTML = "";
                 document.getElementById("answer2").innerHTML = "";
                  document.getElementById("answer3").innerHTML = "";
                //   document.getElementById("answer4").innerHTML = "";
                 },1500)
                 
             }
         }
     })
}


function helpMan(){
    // document.getElementById("help_family").style.display = "none";
    document.getElementById("renderHelpPeople").style.display = "none";
    document.getElementById("help_man").style.display = "none";
 
     var countSTT = questionAndAnswer.map(function(questionAnswer,index) {
         if(index  >= start &&  index < end){
            if(index == 5){
                document.getElementById("render_help_man").style.display = "block";
                setTimeout(function(){
                    document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án A";

                },1500)
                
            }
           else if(index == 6){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án D";
 
                 },1500)
                 
             }else if(index == 7){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án B";
 
                 },1500)
                 
             }else if(index == 8){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án C";
 
                 },1500)
                 
             }else if(index == 9){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án D";
 
                 },1500)
                 
             }else if(index == 10){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án A";
 
                 },1500)
                 
             }else if(index == 11){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án C";
 
                 },1500)
                 
             }else if(index == 12){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án B";
 
                 },1500)
                 
             }else if(index == 13){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án B";
 
                 },1500)
                 
             }else if(index == 14){
                 document.getElementById("render_help_man").style.display = "block";
                 setTimeout(function(){
                     document.getElementById("render_answer_help_man").innerHTML = "Xin chào chương trình tôi là người đồng hành với người chơi,tôi xin trợ giúp bạn của mình là đáp án A";
 
                 },1500)
                }
             }
            })

            }
