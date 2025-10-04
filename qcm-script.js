// QCM Interactive System
class QCMSystem {
    constructor() {
        this.currentQCM = null;
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.startTime = null;
        this.timer = null;
        this.qcmData = this.initializeQCMData();
        
        this.initializeEventListeners();
    }

    initializeQCMData() {
        return {
            'anatomie-general-1': {
                title: 'QCM Anatomie - Système Squelettique',
                duration: 15,
                questions: [
                    {
                        question: "Combien d'os composent le squelette humain adulte ?",
                        answers: [
                            "206 os",
                            "208 os", 
                            "210 os",
                            "212 os"
                        ],
                        correct: 0,
                        explanation: "Le squelette humain adulte est composé de 206 os."
                    },
                    {
                        question: "Quel est le plus grand os du corps humain ?",
                        answers: [
                            "Le fémur",
                            "Le tibia",
                            "L'humérus",
                            "Le radius"
                        ],
                        correct: 0,
                        explanation: "Le fémur est le plus grand et le plus fort os du corps humain."
                    },
                    {
                        question: "Combien de vertèbres composent la colonne vertébrale ?",
                        answers: [
                            "31 vertèbres",
                            "32 vertèbres",
                            "33 vertèbres",
                            "34 vertèbres"
                        ],
                        correct: 2,
                        explanation: "La colonne vertébrale est composée de 33 vertèbres."
                    }
                ]
            },
            'anatomie-general-2': {
                title: 'QCM Anatomie - Système Musculaire',
                duration: 20,
                questions: [
                    {
                        question: "Combien de muscles composent le corps humain ?",
                        answers: [
                            "Plus de 600 muscles",
                            "Plus de 500 muscles",
                            "Plus de 700 muscles",
                            "Plus de 800 muscles"
                        ],
                        correct: 0,
                        explanation: "Le corps humain contient plus de 600 muscles."
                    },
                    {
                        question: "Quel est le muscle le plus fort du corps humain ?",
                        answers: [
                            "Le muscle masséter",
                            "Le muscle fessier",
                            "Le muscle quadriceps",
                            "Le muscle deltoïde"
                        ],
                        correct: 0,
                        explanation: "Le muscle masséter est considéré comme le plus fort du corps humain."
                    }
                ]
            },
            'biologie-cellulaire-1': {
                title: 'QCM Structure Cellulaire',
                duration: 25,
                questions: [
                    {
                        question: "Quelle est la fonction principale des mitochondries ?",
                        answers: [
                            "La production d'énergie (ATP)",
                            "La synthèse des protéines",
                            "Le stockage de l'ADN",
                            "La dégradation des déchets"
                        ],
                        correct: 0,
                        explanation: "Les mitochondries sont responsables de la production d'énergie sous forme d'ATP."
                    },
                    {
                        question: "Quel organite est responsable de la synthèse des protéines ?",
                        answers: [
                            "Le réticulum endoplasmique rugueux",
                            "L'appareil de Golgi",
                            "Les lysosomes",
                            "Le noyau"
                        ],
                        correct: 0,
                        explanation: "Le réticulum endoplasmique rugueux contient les ribosomes qui synthétisent les protéines."
                    }
                ]
            },
            'physiologie-1': {
                title: 'QCM Physiologie Cardiovasculaire',
                duration: 30,
                questions: [
                    {
                        question: "Quelle est la fréquence cardiaque normale au repos chez un adulte ?",
                        answers: [
                            "60-100 battements par minute",
                            "50-90 battements par minute",
                            "70-110 battements par minute",
                            "80-120 battements par minute"
                        ],
                        correct: 0,
                        explanation: "La fréquence cardiaque normale au repos est de 60-100 battements par minute."
                    },
                    {
                        question: "Quelle est la pression artérielle normale ?",
                        answers: [
                            "120/80 mmHg",
                            "130/90 mmHg",
                            "110/70 mmHg",
                            "140/90 mmHg"
                        ],
                        correct: 0,
                        explanation: "La pression artérielle normale est de 120/80 mmHg."
                    }
                ]
            },
            'anatomie-dentaire-1': {
                title: 'QCM Morphologie Dentaire',
                duration: 20,
                questions: [
                    {
                        question: "Combien de dents composent la dentition permanente ?",
                        answers: [
                            "32 dents",
                            "30 dents",
                            "28 dents",
                            "34 dents"
                        ],
                        correct: 0,
                        explanation: "La dentition permanente est composée de 32 dents."
                    },
                    {
                        question: "Quelle est la première dent permanente à apparaître ?",
                        answers: [
                            "La première molaire",
                            "L'incisive centrale",
                            "La canine",
                            "La prémolaire"
                        ],
                        correct: 0,
                        explanation: "La première molaire permanente est généralement la première à apparaître vers 6 ans."
                    }
                ]
            },
            'chimie-pharmaceutique-1': {
                title: 'QCM Chimie Organique',
                duration: 25,
                questions: [
                    {
                        question: "Qu'est-ce qu'un alcool primaire ?",
                        answers: [
                            "Un alcool avec un groupe OH sur un carbone primaire",
                            "Un alcool avec deux groupes OH",
                            "Un alcool avec un groupe OH sur un carbone secondaire",
                            "Un alcool avec un groupe OH sur un carbone tertiaire"
                        ],
                        correct: 0,
                        explanation: "Un alcool primaire a le groupe OH sur un carbone primaire (lié à un seul autre carbone)."
                    }
                ]
            }
        };
    }

    initializeEventListeners() {
        // QCM item clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.qcm-item')) {
                e.preventDefault();
                const qcmId = e.target.closest('.qcm-item').dataset.qcm;
                this.startQCM(qcmId);
            }
        });

        // Modal close buttons
        document.getElementById('close-qcm').addEventListener('click', () => {
            this.closeQCM();
        });

        document.getElementById('close-results').addEventListener('click', () => {
            this.closeResults();
        });

        // Navigation buttons
        document.getElementById('prev-question').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('finish-qcm').addEventListener('click', () => {
            this.finishQCM();
        });

        // Results actions
        document.getElementById('retry-qcm').addEventListener('click', () => {
            this.retryQCM();
        });

        document.getElementById('back-to-list').addEventListener('click', () => {
            this.backToList();
        });

        // Close modals when clicking outside
        document.getElementById('qcm-modal').addEventListener('click', (e) => {
            if (e.target.id === 'qcm-modal') {
                this.closeQCM();
            }
        });

        document.getElementById('results-modal').addEventListener('click', (e) => {
            if (e.target.id === 'results-modal') {
                this.closeResults();
            }
        });
    }

    startQCM(qcmId) {
        this.currentQCM = this.qcmData[qcmId];
        if (!this.currentQCM) {
            alert('QCM non trouvé');
            return;
        }

        this.currentQuestionIndex = 0;
        this.answers = [];
        this.startTime = new Date();
        
        // Show modal
        document.getElementById('qcm-modal').style.display = 'flex';
        document.getElementById('qcm-title').textContent = this.currentQCM.title;
        
        // Start timer
        this.startTimer();
        
        // Load first question
        this.loadQuestion();
    }

    startTimer() {
        const duration = this.currentQCM.duration * 60; // Convert to seconds
        let timeLeft = duration;
        
        this.timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                this.finishQCM();
                return;
            }
            
            timeLeft--;
        }, 1000);
    }

    loadQuestion() {
        const question = this.currentQCM.questions[this.currentQuestionIndex];
        const totalQuestions = this.currentQCM.questions.length;
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / totalQuestions) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = 
            `Question ${this.currentQuestionIndex + 1} sur ${totalQuestions}`;
        
        // Update question
        document.getElementById('question-text').textContent = question.question;
        
        // Update answers
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.innerHTML = `
                <input type="radio" name="answer" value="${index}" id="answer-${index}">
                <label for="answer-${index}">${answer}</label>
            `;
            answersContainer.appendChild(answerElement);
        });
        
        // Update navigation buttons
        document.getElementById('prev-question').disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex === totalQuestions - 1) {
            document.getElementById('next-question').style.display = 'none';
            document.getElementById('finish-qcm').style.display = 'inline-block';
        } else {
            document.getElementById('next-question').style.display = 'inline-block';
            document.getElementById('finish-qcm').style.display = 'none';
        }
        
        // Load previous answer if exists
        if (this.answers[this.currentQuestionIndex] !== undefined) {
            const radio = document.querySelector(`input[value="${this.answers[this.currentQuestionIndex]}"]`);
            if (radio) radio.checked = true;
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.saveCurrentAnswer();
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        this.saveCurrentAnswer();
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    saveCurrentAnswer() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        this.answers[this.currentQuestionIndex] = selectedAnswer ? parseInt(selectedAnswer.value) : null;
    }

    finishQCM() {
        this.saveCurrentAnswer();
        clearInterval(this.timer);
        
        // Calculate results
        const results = this.calculateResults();
        
        // Show results modal
        this.showResults(results);
        
        // Close QCM modal
        document.getElementById('qcm-modal').style.display = 'none';
    }

    calculateResults() {
        let correctAnswers = 0;
        const totalQuestions = this.currentQCM.questions.length;
        
        this.answers.forEach((answer, index) => {
            if (answer === this.currentQCM.questions[index].correct) {
                correctAnswers++;
            }
        });
        
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const timeUsed = Math.floor((new Date() - this.startTime) / 1000);
        const minutes = Math.floor(timeUsed / 60);
        const seconds = timeUsed % 60;
        
        return {
            correct: correctAnswers,
            total: totalQuestions,
            percentage: percentage,
            timeUsed: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        };
    }

    showResults(results) {
        document.getElementById('score-percentage').textContent = `${results.percentage}%`;
        document.getElementById('correct-answers').textContent = results.correct;
        document.getElementById('total-questions').textContent = results.total;
        document.getElementById('time-used').textContent = results.timeUsed;
        
        // Update score circle color based on performance
        const scoreCircle = document.querySelector('.score-circle');
        if (results.percentage >= 80) {
            scoreCircle.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        } else if (results.percentage >= 60) {
            scoreCircle.style.background = 'linear-gradient(135deg, #FF9800, #F57C00)';
        } else {
            scoreCircle.style.background = 'linear-gradient(135deg, #F44336, #D32F2F)';
        }
        
        document.getElementById('results-modal').style.display = 'flex';
    }

    retryQCM() {
        this.closeResults();
        this.startQCM(Object.keys(this.qcmData).find(key => this.qcmData[key] === this.currentQCM));
    }

    backToList() {
        this.closeResults();
    }

    closeQCM() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        document.getElementById('qcm-modal').style.display = 'none';
    }

    closeResults() {
        document.getElementById('results-modal').style.display = 'none';
    }
}

// Initialize QCM system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QCMSystem();
});
