const questions = ["성장", "성공", "기회", "비전", "성취"];
const tools = ["공부", "교양 영상 시청", "여윳돈 저축", "자격증 준비", "학회"];
const experiences = ["외출", "오락 영상 시청", "여윳돈 소비", "휴식", "취미 동아리"];
const positives = ["효율적", "도움이 되는", "가치 있는", "중요한", "필요한"];
const negatives = ["비효율적", "쓸모없는", "가치없는", "중요하지 않은", "필요없는"];

let results = [];

function generateTest(testNumber) {
    const question = questions[Math.floor(Math.random() * questions.length)];
    let left, right;
    if (testNumber === 1 || testNumber === 2) {
        left = tools[Math.floor(Math.random() * tools.length)];
        right = experiences[Math.floor(Math.random() * experiences.length)];
    } else if (testNumber === 3 || testNumber === 4) {
        left = positives[Math.floor(Math.random() * positives.length)];
        right = negatives[Math.floor(Math.random() * negatives.length)];
    } else {
        left = `${tools[Math.floor(Math.random() * tools.length)]} & ${positives[Math.floor(Math.random() * positives.length)]}`;
        right = `${experiences[Math.floor(Math.random() * experiences.length)]} & ${negatives[Math.floor(Math.random() * negatives.length)]}`;
    }
    return { question, left, right };
}

function startExperiment() {
    let testNumber = 1;
    results = [];
    document.getElementById('result').innerHTML = '';

    function askQuestion() {
        if (testNumber > 18) {
            alert('실험이 종료되었습니다.');
            return;
        }

        const { question, left, right } = generateTest(testNumber);
        const startTime = new Date().getTime();
        document.getElementById('question').innerText = question;
        document.getElementById('left').innerText = `1) ${left}`;
        document.getElementById('right').innerText = `2) ${right}`;

        document.getElementById('submit').onclick = function () {
            const reactionTime = (new Date().getTime() - startTime) / 1000;
            const selectedOption = document.querySelector('input[name="choice"]:checked').value === '1' ? left : right;
            results.push({ testNumber, question, selectedOption, reactionTime });

            testNumber++;
            askQuestion();
        };
    }

    askQuestion();
}
