import { useQuery } from 'react-query';

import { SingleCharacter } from 'components/SingleCharacter/SingleCharacter';
import { CharactersWrapper } from 'components/styledComponents/CharactersWrapper';

import { Character } from 'types/Character';
import { getRandomNumbers } from 'helpers/getRandomNumbers';
import Spinner from '../Spinner/Spinner';

const getCharacters = async (nums: number[]) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${nums}`
  );
  return response.json();
};

function RandomCharacters() {
  const randomNumbers = getRandomNumbers();
  const { isLoading, data, isSuccess, isError } = useQuery<Character[]>(
    ['randomCharacters'],
    () => getCharacters(randomNumbers)
  );

  return (
    <>
      {isError && <h1>Sorry but we couldn't load data for you</h1>}
      {isLoading && <Spinner />}
      {isSuccess && (
        <CharactersWrapper>
          {data!.map((character: Character) => (
            <SingleCharacter key={character.id} {...character} />
          ))}
        </CharactersWrapper>
      )}
    </>
  );
}

export { RandomCharacters };
