import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import { CountdownContext } from '../contexts/CountdownContexts';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox(){

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceede(){
        completeChallenge();
        resetCountdown();
    }
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? ( 

                <div className={ styles.challengeActive }>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFaliedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceedeButton}
                            onClick={handleChallengeSucceede}
                        >
                        Completei
                        </button>
                    </footer>
            </div> 
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Inicie um ciclo para receber desafios a serem completados 
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios 
                    </p>
                </div>
            ) }

        </div>
    );
}