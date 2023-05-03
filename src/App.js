import { useState } from 'react';
import './App.css';
import { videoes } from './videoes';
import VideoList from './components/VideoList';

export default function App() {
  const [list, setList] = useState(videoes);

  return (
    <VideoList list={list} />
  );
}
