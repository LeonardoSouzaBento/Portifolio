import { Separator } from "@/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { findTitle } from "@/utils/findTitle";

const title = findTitle("experiencia");

export const Experience = () => {
  return (
    <Card id={title.keyWord} className={`home-section`}>
      <CardHeader>
        <CardTitle>
          <h3>{title.title}</h3>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <p>
          Após quase dois anos desenvolvendo aplicações com React, adquiri
          experiência na resolução de problemas e conflitos envolvendo CSS,
          JavaScript e TypeScript, aplicando boas práticas, clareza e
          organização de código.
        </p>
        <p>
          Tenho conhecimento em padrões de UI design aplicados em todos os
          projetos, especialmente no Gerador de CSS. Aplico bons hábitos de
          organização de projeto, como estruturação clara de arquivos e pastas,
          nomeação consistente de funções e variáveis e uso de commits
          semânticos para versionamento com Git.
        </p>
        <p>
          Tenho experiência em desenvolver APIs REST e integrá-las com o
          front-end, assim como noções de bancos de dados relacionais e SQL.
        </p>
        <p>
          Atualmente, estou focado na evolução de um projeto de catálogo de
          roupas online, aplicando esses conhecimentos. Dedico-me integralmente
          ao estudo e à programação, mantendo aprendizado contínuo e atualização
          constante nas tecnologias que utilizo.
        </p>
      </CardContent>
    </Card>
  );
};
