import { Route, Routes } from 'react-router-dom';
import { About } from './proba';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
};
