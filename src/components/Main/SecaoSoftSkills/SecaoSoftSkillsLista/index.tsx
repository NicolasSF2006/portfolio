const skills = [
  "Empatia",
  "Resiliência",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Proatividade",
  "Aprendizado",
]

export function SecaoSoftSkillsLista() {
  return (
    <ul className="flex flex-wrap justify-end gap-10">
      {skills.map((skill) => (
        <li key={skill}>
          <p className="font-['Encode_Sans_Semi_Expanded'] font-bold backdrop-blur-[2px]">
            {skill}
          </p>
        </li>
      ))}
    </ul>
  )
}
