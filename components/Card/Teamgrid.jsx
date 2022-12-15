import React from "react";
import Card from "./Card";

export default function TeamGrid({team}) {
  return (
    <div>
    {team.members.map((member) => {
      return <Card meta={member} key={member.title}/>      
    })}
    </div>
  );
}