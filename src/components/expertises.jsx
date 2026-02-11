import { Separator } from '@/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';

const title = findTitle('experiencia');

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
          Após quase dois anos desenvolvendo aplicações com React, adquiri experiência na resolução
          de problemas envolvendo CSS, JavaScript e TypeScript, com foco em boas práticas, clareza e
          organização de código.
        </p>
        <p>
          Possuo conhecimento em padrões de UI design, aplicados em todos os projetos, especialmente
          no Gerador de CSS. Desenvolvi bons hábitos de organização de projeto, como estruturação e
          nomeação de arquivos e pastas, nomeação clara de funções e variáveis e uso de commits
          semânticos para versionamento com Git.
        </p>
        <p>
          Tenho experiência em desenvolver APIs REST e integrar com o front-end, assim como noções
          de bancos de dados relacionais e SQL.
        </p>
        <p>
          Atualmente, meu foco é evoluir um projeto de catálogo de roupas online, aplicando na
          prática esses conhecimentos. Dedico-me integralmente ao estudo e à programação, mantendo
          aprendizado contínuo e atualização constante nas tecnologias que utilizo.
        </p>
      </CardContent>
    </Card>
  );
};
