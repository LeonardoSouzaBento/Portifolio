import { cardStyles, sectionStyles } from '@/App';
import { iconSm } from '@/css/lucideIcon';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { Church, Heart, Scale, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';
import useEqualizeSize from '@/hooks/useEqualizeSize';
import { sectionsTitles } from '../data/sectionsTitles';

const title = sectionsTitles.find((title) => title.keyWord === 'sobre mim');

const AboutMe = ({ wasResize }) => {
  const lastPWrapperRef = useRef(null);
  const [lastPWrapperHeight, setLastPWrapperHeight] = useState(0);

  useEqualizeSize(lastPWrapperRef, setLastPWrapperHeight, wasResize);

  return (
    <Card id={title.keyWord} className={sectionStyles}>
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent className={`${cardStyles} flex flex-row`}>
        <div className={`min-w-max min-h-full relative`}>
          <div>
            <Heart {...iconSm} className={`mt-2 mb-3`} />
            <Church {...iconSm} />
          </div>
          <div
            className={`flex flex-col justify-between absolute bottom-0 left-0`}
            style={{ height: `${lastPWrapperHeight}px` }}>
            <Scale {...iconSm} className={`mt-2`}/>
            <Trash2 {...iconSm} className={`mb-2`} />
          </div>
        </div>
        <div>
          <p>
            Tenho sabedoria e consideração pelo próximo. <br /> Busco convívio harmonioso, não luto
            por posições nem ando em inveja. Ao contrário disso, aceito meu status (como Jesus
            ensinou), pois sei que é Deus quem determina a posição de cada um e a glória que cada um
            chegará a ter. Essa humildade me faz ser realista e aberto a críticas. Sou altamente
            confiável, pois o temor de Deus e seu Espírito Santo estão em mim, fornecendo-me
            temperança.
          </p>
          <div ref={lastPWrapperRef}>
            <p>
              Busco uma vida equilibrada, sem vício em drogas ou paixão por mulheres da vida. E
              também sei que as práticas da vida pessoal impactam negativamente a vida profissional.
              Exerço minhas atividades com alegria e foco, com dedicação. É esse profissional que
              você vai encontrar em mim.
            </p>
            <p>Se não é importante ter um profissional como esse no seu time, dispense-me.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
