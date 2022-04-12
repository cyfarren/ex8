import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is Florida's state flower?',
			answerOptions: [
				{answer: 'Jasmine', isCorrect: false },
				{answer: 'Rose', isCorrect: true },
				{answer: 'Hibiscus', isCorrect: false},
        {answer:'Orange Blossom', isCorrect:true}
			],
		},
		{
			questionText: 'What is UCF's mascot?',
			answerOptions: [
				{answer: 'Knightro', isCorrect: true},
				{answer: 'Mickey', isCorrect: false},
				{answer: 'Charlie', isCorrect: false},
				{answer: 'ScoobyDoo', isCorrect: false},
			],
		},
		{
			questionText: 'Which is a fruit?',
			answerOptions: [
				{answer: 'Apple', isCorrect: true},
				{answer: 'Potato', isCorrect: false},
				{answer: 'Tomato', isCorrect: true},
				{answer: 'Spinach', isCorrect: false},
			],
		},
	];

	const [currentQ, setCurrentQ] = useState(0);
	const [show, setShow] = useState(false);
	const [score, Score] = useState(0);

	const OptionClick = (isCorrect) => {
		if (isCorrect) {
			Score(score + 1);
		}

		const nextQuestion = currentQ + 1;
		if (nextQuestion < questions.length) {
			setCurrentQ(nextQ);
		} else {
			setShow(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question'>{questions[currentQ].question}</div>
					</div>
					<div className='answer'>
						{questions[currentQ].answerO.map((answerO) => (
							<button onClick={() => handleAnswerOptionClick(answerO.isCorrect)}>{answerO.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
