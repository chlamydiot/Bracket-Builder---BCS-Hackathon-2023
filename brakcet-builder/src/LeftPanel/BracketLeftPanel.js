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
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: 'Team E' }, { name: 'Team F' }],
      },
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: 'Team G' }, { name: 'Team H' }],
      },
    ],
  },
  {
    title: 'Round two',
    seeds: [
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 6,
        date: new Date().toDateString(),
        teams: [{ name: 'Team D' }, { name: 'Team E' }],
      }
    ],
  },
  {
    title: 'Round three',
    seeds: [
      {
        id: 7,
        date: new Date().toDateString(),
        teams: [{ name: 'Team A' }, { name: 'Team D' }],
      }
    ],
  }
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