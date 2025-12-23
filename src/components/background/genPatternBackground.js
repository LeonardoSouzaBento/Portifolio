function createReactIcon(className = '') {
  const svgNS = 'http://www.w3.org/2000/svg';
  const icon = document.createElementNS(svgNS, 'svg');

  // Definir atributos do SVG
  icon.setAttribute('viewBox', '0 0 841.9 595.3');
  icon.setAttribute('class', `react-icon ${className}`);

  // Criar elementos do ícone React
  const ellipse1 = document.createElementNS(svgNS, 'ellipse');
  ellipse1.setAttribute('cx', '420.9');
  ellipse1.setAttribute('cy', '297.6');
  ellipse1.setAttribute('rx', '45.6');
  ellipse1.setAttribute('ry', '149.4');
  ellipse1.setAttribute('fill', 'none');
  ellipse1.setAttribute('stroke', 'currentColor');
  ellipse1.setAttribute('stroke-width', '12');

  const ellipse2 = document.createElementNS(svgNS, 'ellipse');
  ellipse2.setAttribute('cx', '420.9');
  ellipse2.setAttribute('cy', '297.6');
  ellipse2.setAttribute('rx', '45.6');
  ellipse2.setAttribute('ry', '149.4');
  ellipse2.setAttribute('fill', 'none');
  ellipse2.setAttribute('stroke', 'currentColor');
  ellipse2.setAttribute('stroke-width', '12');
  ellipse2.setAttribute('transform', 'rotate(60 420.9 297.6)');

  const ellipse3 = document.createElementNS(svgNS, 'ellipse');
  ellipse3.setAttribute('cx', '420.9');
  ellipse3.setAttribute('cy', '297.6');
  ellipse3.setAttribute('rx', '45.6');
  ellipse3.setAttribute('ry', '149.4');
  ellipse3.setAttribute('fill', 'none');
  ellipse3.setAttribute('stroke', 'currentColor');
  ellipse3.setAttribute('stroke-width', '12');
  ellipse3.setAttribute('transform', 'rotate(120 420.9 297.6)');

  const circle = document.createElementNS(svgNS, 'circle');
  circle.setAttribute('cx', '420.9');
  circle.setAttribute('cy', '297.6');
  circle.setAttribute('r', '24');
  circle.setAttribute('fill', 'currentColor');

  // Adicionar elementos ao SVG
  icon.appendChild(ellipse1);
  icon.appendChild(ellipse2);
  icon.appendChild(ellipse3);
  icon.appendChild(circle);

  return icon;
}

// Função para gerar o padrão de ícones React
export default function generatePatternBackground() {
  const patternContainer = document.getElementById('pattern');
  patternContainer.innerHTML = '';

  // Definir quantos ícones criar baseado no tamanho da tela
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const iconCount = Math.floor((screenWidth * screenHeight) / 10000);

  // Cores possíveis para os ícones
  const colors = ['#61dafb', '#4dc0ff', '#38a9ff', '#1e90ff', '#00bfff'];

  // Criar múltiplos ícones React
  for (let i = 0; i < iconCount; i++) {
    const icon = createReactIcon();

    // Definir tamanho aleatório
    const sizes = ['small', 'medium', 'large'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    icon.classList.add(size);

    // Posição aleatória na tela
    const posX = Math.random() * screenWidth;
    const posY = Math.random() * screenHeight;

    // Cor aleatória
    const color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.fill = color;
    icon.style.color = color;

    // Definir posição
    icon.style.left = `${posX}px`;
    icon.style.top = `${posY}px`;

    // Velocidade de animação aleatória
    const duration = 20 + Math.random() * 40;
    const delay = Math.random() * 20;
    icon.style.animationDuration = `${duration}s`;
    icon.style.animationDelay = `-${delay}s`;

    patternContainer.appendChild(icon);
  }
}
