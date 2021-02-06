import React, { useState, useCallback } from 'react'
import styles from '../styles/Home.module.scss'


export default function Test() {

    const [step, setStep] = useState(0)

    const testObjArr = [
        {
            "question": "처음 보는 친구들에게 나는?",
            "options": [
                "대부분 다른 친구가 먼저 말을 건낸다.",
                "내가 먼저 말을 건낸다."
            ]
        },
        {
            "question": "주말에 난?",
            "options": [
                "혼자 있는 게 싫지 않은 편이다.",
                "사람들과 만나는 것을 즐긴다."
            ]
        },
        {
            "question": "친구들과 놀 때 나는?",
            "options": [
                "왁자지껄한 신나는 분위기를 좋아한다.",
                "소수의 친구들과 소소하게 대화하는 것을 좋아한다."
            ]
        }
    ]

    const handleNextStep = useCallback((idx, subIdx) => {
        if(idx === testObjArr.length -1 ) {
            return
        }
        
        //옵션 저장 필요
        
        //step 올리기
        setStep(step+1)

        
    }, [step])

    return (
        <div className={styles.test}>
            <p>step : {step}</p>
            {testObjArr.map((item, idx) => 
                {
                    if(idx === step) {
                        return (
                            <div key={idx}>
                                {/* question */}
                                <div className={styles.question}>
                                    <h5>{item.question}</h5>
                                </div>
                                {/* options */}
                                <div className={styles.option}>
                                    {
                                        item.options.map((option, subIdx) => (
                                            <button key={subIdx} onClick={() => handleNextStep(idx, subIdx)}>{option}</button>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            )}
    
            {/* question-progress */}
            <div className={styles.progress}>
                <div className={styles.progressBar}>
                </div>
                <h5 className={styles.questionCount}> {step + 1} / {testObjArr.length} </h5>
            </div>
        </div>
    )

}