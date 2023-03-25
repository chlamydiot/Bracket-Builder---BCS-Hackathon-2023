import { useState } from "react"
import { Bracket, RoundProps } from 'react-brackets';

const rounds = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
    ],
  },
  {
    title: 'Round one',
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
];

function BracketLeftPanel({input}) {
  const generateBracket = () => {
    console.log("Bracket would be generated here.");
  }

    return <div className="LeftPanel">
      <h1>SONGS PANEL</h1>
      <Bracket rounds={rounds} />
    </div>
}

export default BracketLeftPanel;