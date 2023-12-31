import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import { Button } from '../../components';
import { Game } from '../../types/Game.types';
import GameCard from './components/GameCard';

interface Props {
  games: Game[],
}

const cardDuration = 10;
const cycleArray = (array: Game[]) => {
  const newArray = [...array];
  newArray.push(newArray.shift() as Game);
  return newArray;
};

function Home(props: Props) {
  const { games } = props;
  const [homeGames, setHomeGames] = useState(games.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeGames(games => cycleArray(games));
    }, cardDuration * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {homeGames.map(({ id, name, background_image }, i) => (
        <GameCard
          key={id}
          id={id}
          name={name}
          backgroundImage={background_image}
          duration={cardDuration}
          big={i === 0}
        />
      ))}
      <Button className="Store">
        Go to the store <RiArrowRightLine />
      </Button>
    </motion.div>
  );
}

export default Home;
