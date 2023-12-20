//아이디 사용 가능/중복 메세지 입력

// 가정: 이미 존재하는 아이디 목록
//const existingUsernames = ["user1", "user2", "user3"];

// 아이디 중복 검사 함수
function isUsernameAvailable(username) {
  return !existingUsernames.includes(username);
}

// 아이디 입력 필드와 메시지를 선택합니다.
const usernameInput = document.querySelector(".signup_id");
const availabilityMessage = document.querySelector("#availabilityMessage");

// 아이디 입력 필드에서 입력이 발생할 때 아이디 중복 검사를 수행하는 이벤트 리스너를 추가합니다.
//usernameInput.addEventListener("input", () => {
//  const enteredUsername = usernameInput.value;
//
//  if (isUsernameAvailable(enteredUsername)) {
//    availabilityMessage.textContent = "아이디 사용 가능";
//    availabilityMessage.style.color = "blue"; // 아이디 사용 가능 메시지의 글씨 색상을 파란색으로 설정
//  } else {
//    availabilityMessage.textContent = "아이디가 이미 사용 중입니다.";
//    availabilityMessage.style.color = "red"; // 아이디가 이미 사용 중인 메시지의 글씨 색상을 빨간색으로 설정
//    availabilityMessage.classList.add("shake"); // 떨리는 효과를 추가
//  }
//
//  // 메시지를 표시하고 떨린 후에 숨김
//  availabilityMessage.style.display = "block";
//  setTimeout(() => {
//    availabilityMessage.classList.remove("shake");
//  }, 200); // 0.2초 뒤에 숨김 및 효과 제거
//});


$(document).ready(function(){
        // 아이디 중복 검사
        $("input[name='userId']").on('input', function() {
            var userId = $(this).val();

            // 유효성 검사: 아이디가 비어있는지 확인
            if (userId == '') {
                $("#userIdError").text("아이디를 입력하세요.");
                return;
            }

            // 중복 검사: 아이디가 이미 사용중인지 확인
            $.ajax({
                url: '/idCheck',
                type: 'POST',
                data: JSON.stringify({ userId: userId }),
                contentType: "application/json",
                success: function(data) {
                    if (data.status === 'fail') {
                        $("#userIdError").text(data.message).css("color","red");
                    } else {
                        $("#userIdError").text(data.message).css("color", "blue");
                    }
                },
                error: function(error) {
                    console.error(error);
                }
            });
        });

//function strongPassword (str) {
//  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
//
//        $("form").on("submit", function(event){
//
//                    // 유효성 검사
//                    var isValid = true;
//
//                    // 아이디 유효성 검사
//                    var userId = $("input[name='userId']").val();
//                    if(userId == ""){
//                        $("#userIdError").text("아이디를 입력해주세요.");
//                        isValid = false;
//                    } else {
//                         // 이 부분에서 아이디 중복 검사 결과를 확인하고 처리
//                         var color = $("#userIdError").css("color");
//                         if (color === "red") {
//                             // 중복 검사에서 실패한 경우
//                             alert("아이디 중복 검사를 통과해야 합니다.");
//                             isValid = false;
//                             } else {
//                              $("#userIdError").text("");
//                              }
//                         }
//                    // 이름 유효성 검사
//                    var userName = $("input[name='userName']").val();
//                    if(userName == ""){
//                        $("#userNameError").text("이름을 입력해주세요.");
//                        isValid = false;
//                    } else {
//                        $("#userNameError").text("");
//                    }
//                    // 비밀번호 유효성 검사
//                    var userPw = $("input[name='userPw']").val();
//                    if(strongPassword(password)){
//                        $("#passwordMatchMessage2").text("");
//                    }else{
//                        $("#passwordMatchMessage2").text("8글자 이상, 영문, 숫자, 특수문자(@$!%*#?&)를 사용하세요");
//                        isValid = false;
//                    }
//                    var userPw = $("input[name='userPw']").val();
//                    if(userPw == ""){
//                        $("#passwordMatchMessage2").text("비밀번호를 입력해주세요.");
//                        isValid = false;
//                    } else {
//                        $("#passwordMatchMessage2").text("");
//                    }
//                    var userPwCheck = $("input[name='userPwCheck']").val();
//                    if(userPwCheck == ""){
//                        $("#passwordMatchMessage").text("비밀번호를 입력해주세요.");
//                        isValid = false;
//                    } else {
//                        $("#passwordMatchMessage").text("");
//                    }
//                    // 비밀번호 확인 유효성 검사
//                    var userPwCheck = $("input[name='userPwCheck']").val();
//                    if(userPwCheck != userPw){
//                        $("#passwordMatchMessage").text("비밀번호가 일치하지 않습니다.");
//                        isValid = false;
//                    } else {
//                        $("#passwordMatchMessage").text("");
//                    }
//
//                    // 이메일 유효성 검사
//                    var userEmail = $("input[name='userEmail']").val();
//                    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//                    if(!emailPattern.test(userEmail)){
//                        $("#userEmailError").text("유효한 이메일 주소를 입력해주세요.");
//                        isValid = false;
//                    } else {
//                        $("#userEmailError").text("");
//                    }
//                    var inputCode = $('#verificationInput').val();
//
//                               $.ajax({
//                                   url: '/security/checkCode',
//                                   type: 'POST',
//                                   data: JSON.stringify({ code: inputCode }),
//                                   contentType: "application/json", // 'Content-Type' 헤더를 'application/json'으로 설정
//                                   success: function(result) {
//                                       if (result) {
//                                           alert('');
//                                       } else {
//                                           alert('이메일 인증이 되어야 합니다.');
//                                           isValid = false;
//                                       }
//                                   }
//                               });
//
//                    if(!$('.agreebox2 input[type="checkbox"]').is(':checked')){
//                        alert('약관동의가 필요합니다.');
//                        event.preventDefault();
//                        return;
//                    }
//
//                    var formData = $(this).serialize();
//                    $.ajax({
//                        url: '/security/register',
//                        type: 'POST',
//                        data: formData,
//                        success: function(data) {
//                            alert(data.message);
//                            if (data.status === 'success') {
//                                window.location.href = "/main";
//                            }
//                        },
//                        error: function(error) {
//                            console.error(error);
//                        }
//                    });
//                    event.preventDefault();
//                });
//
//    });