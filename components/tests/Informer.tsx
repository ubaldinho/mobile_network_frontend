import { useState } from 'react';
import ProgressBar from 'react-progressbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface HistoryItem {
  id: number;
  isSuccess: boolean;
  message: string;
}

function App(): JSX.Element {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [progress, setProgress] = useState<number>(0);

  const handleAction = async (): Promise<void> => {
    // Réinitialisation de la progression
    setProgress(0);

    // Simulation de l'action de l'utilisateur
    await simulateAction();

    // Vérification du résultat
    const isSuccess: boolean = Math.random() < 0.5;

    // Affichage de la notification
    if (isSuccess) {
      toast.success('Résultat réussi !');
    } else {
      toast.error('Résultat incorrect !');
    }

    // Ajout de l'alerte ou de la notification à l'historique
    const newItem: HistoryItem = {
      id: Date.now(),
      isSuccess,
      message: isSuccess ? 'Résultat réussi !' : 'Résultat incorrect !',
    };
    setHistory((prevHistory) => [newItem, ...prevHistory]);

    // Mise à jour de la progression
    setProgress(isSuccess ? 100 : 0);
  };

  const simulateAction = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      // Progression progressive jusqu'à 100
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
            resolve();
          }
          return newProgress;
        });
      }, 50);
    });
  };

  return (
    <div >
<div className="flex justify-center items-center m-8">
<button onClick={handleAction} className='border-2 hover:bg-blue-300 border-primary mx-6 px-5 py-3 items-center  jusify-center rounded-full'>Lancer l action</button>

</div>
      <ProgressBar
        completed={progress}
        color={progress === 100 ? 'green' : 'red'}
      />

      <ToastContainer />

      <div className="history">
        {history.map((item) => (
          <div
            key={item.id}
            className={`history-item ${item.isSuccess ? 'success' : 'error'}`}
          >
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;