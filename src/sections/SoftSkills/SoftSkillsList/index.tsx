/*
  Lista de habilidades comportamentais exibidas no desktop.

  No mobile/tablet, essa lista é escondida pelo componente pai
  para manter a seção mais compacta.
*/
const skills = [
  "Empatia",
  "Resiliência",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Proatividade",
  "Aprendizado",
]

export function SoftSkillsList() {
  return (
    /*
      Lista visual das soft skills.

      flex-wrap permite que os itens quebrem linha se necessário.
      justify-end mantém a lista alinhada à direita, acompanhando o texto.
    */
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
