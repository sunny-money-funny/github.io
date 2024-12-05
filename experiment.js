// 데이터 정의
const questions = ["성장", "성공", "기회", "비전", "성취"];
const tools = ["공부", "교양 영상 시청", "여윳돈 저축", "자격증 준비", "학회"];
const experiences = ["외출", "오락 영상 시청", "여윳돈 소비", "휴식", "취미 동아리"];
const positives = ["효율적", "도움이 되는", "가치 있는", "중요한", "필요한"];
const negatives = ["비효율적", "쓸모없는", "가치없는", "중요하지 않은", "필요없는"];

// 랜덤 질문과 선택지 생성
function generateTest() {
    const question = questions[Math.floor(Math.random() * questions.length)];
    const randomChoice = Math.floor(Math.random() * 6) + 1;  // 1-6까지 랜덤
    
    let left, right;
    
    if (randomChoice <= 2) { // 도구 vs 경험
        left = tools[Math.floor(Math.random() * tools.length)];
        right = experiences[Math.floor(Math.random() * experiences.length)];
    } else if (randomChoice <= 4) { // 긍정 vs 부정
        left = positives[Math.floor(Math.random() * positives.length)];
        right = negatives[Math.floor(Math.random() * negatives.length)];
    } else { // 도구+긍정 vs 경험+부정
        left = `${tools[Math.floor(Math.random() * tools.length)]} & ${positives[Math.floor(Math.random() * positives.length)]}`;
        right = `${experiences[Math.floor(Math.random() * experiences.length)]} & ${negatives[Math.floor(Math.random() * negatives.length)]}`;
    }

    return { question, left, right };
}

// 질문 및 옵션 HTML에 삽입
function displayTest() {
    const { question, left, right } = generateTest();
    const questionContainer = document.getElementById('questionContainer');
    
    questionContainer.innerHTML = `
        <div class="question">
            <p><strong>질문:</strong> ${question}</p>
            <div class="options">
                <label>
                    <input type="radio" name="option" value="${left}" required> ${left}
                </label><br>
                <label>
                    <input type="radio" name="option" value="${right}"> ${right}
                </label>
            </div>
        </div>
    `;
}

// 폼 제출 시 결과 저장
document.getElementById('experimentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const result = {
            question: document.querySelector('.question p').textContent.replace("질문: ", ""),
            selectedOption: selectedOption.value
        };

        console.log(result); // 여기서 결과를 콘솔에 출력하거나 서버로 전송할 수 있습니다.
        alert('결과가 저장되었습니다!');
    } else {
        alert('옵션을 선택해주세요.');
    }
});

// 페이지 로딩 시 테스트 표시
window.onload = function() {
    displayTest();
};
