//作・こみなも　2021.1.21

const quiz = [
    {
 	 question : '”こみなも”こと小南太一がよく似ていると言われる芸能人はどれ？',
	 answers : ['アンガールズ田中', '水たまりボンドカンタ', 'インパルス板倉', '山崎賢人'],
	 correct: '山崎賢人' 
    }, {
     question : 'こみなもは喋る様子を全国放送されたことがありますが、何について話した時？',
	 answers : ['一般相対性理論と特殊相対性理論の違い', '非摂動的領域における量子色力学', '安倍政権', 'クルトガ'],
	 correct: '安倍政権' 
    }, {
     question : 'じゃんけん？',
	 answers : ['グー', 'チョキ', 'パー', '沈黙!!それが正しい答えなんだ'],
	 correct: 'チョキ' 
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
 document.getElementById('js-question').textContent = quiz[quizIndex]. question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength){
	$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
	buttonIndex++;
 }
}
setupQuiz ();

const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent){
		window.alert('もちろん正解！');
		score++;
	} else {
		window.alert('ざんね〜ん、不正解！');
	}

	quizIndex++;

	if(quizIndex < quizLength){
		//問題数がまだあればこちらを実行
		setupQuiz();
	} else {
		//問題数がもうなければこちらを実行
		window.alert('おわり！あなたの正解数は' + score + '/' + quizLength + 'です！');
	}
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
	$button[handlerIndex].addEventListener('click', (e) => {
	clickHandler(e);
	});
	handlerIndex++;
}
