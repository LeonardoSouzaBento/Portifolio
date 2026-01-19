import { cardStyles } from '@/App';
import { iconSm } from '@/css/lucideIcon';
import useEqualizeSize from '@/hooks/useEqualizeSize';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import { findTitle } from '@/utils/findTitle';
import { Church, Heart, Scale, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';

const title = findTitle('sobre mim');

export const AboutMe = ({ resizingCounter }) => {
  const lastPWrapperRef = useRef(null);
  const [lastPWrapperHeight, setLastPWrapperHeight] = useState(0);

  useEqualizeSize(lastPWrapperRef, setLastPWrapperHeight, resizingCounter);

  return (
    <Card id={title.keyWord} className="home-section">
      <CardHeader>
        <CardTitle>{title.title}</CardTitle>
      </CardHeader>
      <CardContent className={`${cardStyles} flex flex-row gap-[1ex]`}>
        <div className={`min-w-max min-h-full relative [&>div>svg]:text-primary-800`}>
          <div>
            <Heart {...iconSm} className={`mt-[0.7ex] mb-[0.75cap]`} />
            <Church {...iconSm} />
          </div>
          <div
            className={`flex flex-col justify-between absolute bottom-0 left-0`}
            style={{ height: `${lastPWrapperHeight}px` }}>
            <Scale {...iconSm} className={`mt-1.5`} />
            <Trash2 {...iconSm} className={`mb-[1.1ex]`} />
          </div>
        </div>
        <div className={`[&>p]:pb-[0.5ex]`}>
          <p>
            Tenho sabedoria e consideração pelo próximo. <br /> Busco convívio harmonioso, não luto
            por posições nem ando em inveja. Ao contrário disso, aceito minha situação, como Jesus
            ensinou, pois sei que Deus é quem determina a posição de todos, ele quem decide a glória
            que cada um chegará a ter. Essa humildade me faz ser realista e aberto a críticas. Sou
            altamente confiável, pois o temor de Deus e seu Espírito Santo estão em mim,
            fornecendo-me temperança.
          </p>
          <div ref={lastPWrapperRef} className={`[&>p]:pb-[0.5ex]`}>
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
