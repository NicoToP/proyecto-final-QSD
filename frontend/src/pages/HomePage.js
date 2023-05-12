import {usePets} from '../context/petContext';
import {Link} from 'react-router-dom';

export function HomePage() {
  const {setPets} = usePets();

  return <div>homePages</div>;
}
