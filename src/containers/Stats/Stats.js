import "./Stats.modules.scss";
import { useState, useEffect } from "react";
export const Stats = () => {
  const myUserId = "maksimumeffort";

  const [codeWars, setCodeWars] = useState(null);

  const getCodeWars = async () => {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${myUserId}`
    );
    return await response.json();
  };

  useEffect(() => {
    const wrapper = async () => {
      const allCodeWars = await getCodeWars().catch((e) => console.log(e));
      setCodeWars(allCodeWars);
    };
    wrapper();
  }, []);

  return (
    <div class="stats inactive">
      {codeWars && (
        <div>
          <h2>CodeWars</h2>
          <p>Username: {codeWars.username}</p>
          <p>Clan: {codeWars.clan}</p>
          <p>Honor: {codeWars.honor}</p>
          <p>Rank: {codeWars.ranks.overall.name}</p>
          <p>Score: {codeWars.ranks.overall.score}</p>
          <p>Challenges Completed: {codeWars.codeChallenges.totalCompleted}</p>
          <div>
            <h3>Languages</h3>
            <p>Ruby score: {codeWars.ranks.languages.ruby.score}</p>
            <p>JavaScript score: {codeWars.ranks.languages.javascript.score}</p>
            <p>TypeScript score: {codeWars.ranks.languages.typescript.score}</p>
            <p>Java score: {codeWars.ranks.languages.java.score}</p>
          </div>
        </div>
      )}
    </div>
  );
};
