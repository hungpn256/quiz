import * as Types from '../constants/index';

const quizQuestions = [
    {
        id:1,
        question: "Đâu là dạng lỗ hổng bảo mật thưởng gặp trong hệ điều hành và các phần mềm ứng dụng?",
        answers: [
            {
                type: false,
                content: "Lỗi quản trị"
            },
            {
                type: true,
                content: "Lỗi tràn bộ đệm"
            },
            {
                type: false,
                content: "Lỗi cấu hình"
            }
        ]
    },
    {
        id:2,
        question: "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng shellcode. Shellcode đó là dạng:",
        answers: [
            {
                type: false,
                content: "Mã Java"
            },
            {
                type: false,
                content: "Mã C/C++"
            },
            {
                type: true,
                content: "Mã máy"
            }
        ]
    },
    {
        id:3,
        question: "Các lỗ hổng bảo mật thường tôn tại nhiều nhất trong thành phân nào của hệ thống:",
        answers: [
            {
                type: true,
                content: "Các ứng dung"
            },
            {
                type: false,
                content: "Hệ điều hành"
            },
            {
                type: false,
                content: "Các thành phần phần cứng."
            }
        ]
    },
    {
        id:4,
        question: " Nguyên nhân của sự tồn tại các điểm yếu trong hệ thống có thể do:",
        answers: [
            {
                type: false,
                content: "Lỗi thiết kế, lỗi cài đặt và lập trình."
            },
            {
                type: true,
                content: "Tất cả các khâu trong quá trình phát triển và vận hành"
            },
            {
                type: false,
                content: "Lỗi cấu hình hoạt động"
            }
        ]
    },
    {
        id:5,
        question: "Lỗ hổng bảo mật (Security vulnerability) là một điểm yếu tôn tại trong một hệ thống cho phép tin tặc:",
        answers: [
            {
                type: true,
                content: "Khai thác gây tốn hại đến các thuộc tính an ninh của hệ thống đó"
            },
            {
                type: false,
                content: "Khai thác nhằm chiếm quyền điều khiến hệ thống"
            },
            {
                type: false,
                content: "Khai thác, tấn công phá hoại và gây tê liệt hệ thống"
            }
        ]
    }
];
var questionReducer = (state = {
                                    end:false,
                                    quiz:quizQuestions[0],
                                    ind:0,
                                    numberQuiz:quizQuestions.length,
                                    result:0
                                },action)=>{
    switch(action.type){
        case Types.NEXT_QUESTION:
            console.log(action)
            var ind = 0;
            var end = true;
            var res =state.result;
            if(action.id  < quizQuestions.length){
                ind = action.id;
                end = false;
                if(action.res){
                    res++;
                }
            }
            state = {
                end:end,
                ind:ind,
                quiz:quizQuestions[ind],
                numberQuiz:quizQuestions.length,
                result:res
            }
            return state;
        default:
            return state
    }

}
export default questionReducer;
