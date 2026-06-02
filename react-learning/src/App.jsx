function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h1>My Skills</h1>

      {skills.map((skill, index) => (
        <h3 key={index}>{skill}</h3>
      ))}
    </div>
  );
}

export default App;