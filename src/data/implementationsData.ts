import {
  User,
  Search,
  Database,
  MapPinned,
  ShieldCheck,
  LayoutDashboard,
  GalleryThumbnails,
  ListStart,
} from 'lucide-react';

export const implementationsData = {
  front: [
    {
      icon: Search,
      name: 'Sugestões de pesquisa inteligente',
      description:
        'Função javascript completa para sugerir buscar dados e sugerir termos de pesquisa',
    },
    {
      icon: LayoutDashboard,
      name: 'Atualização dinâmica de layouts e larguras',
      description: 'Layouts e larguras corrigidos via javascript para diferentes telas',
    },
    {
      icon: GalleryThumbnails,
      name: 'Rolagem de conteúdo via mouse',
      description: 'Muito conveniente para dispositivos desktop, mas indisponível nativamente',
    },
    {
      icon: ListStart,
      name: 'Rolagem automática programada',
      description: 'Rolagem conveniente para mostrar conteúdo ao usuário',
    },
  ],
  back: [
    {
      icon: User,
      name: 'API completa + Login com Google',
      description: 'Autenticação rápida com Google Auth',
    },
    {
      icon: Database,
      name: 'Integração com Firebase Firestore',
      description: 'Integração com Firebase Firestore',
    },
    {
      icon: MapPinned,
      name: 'Preenchimento automático de endereço',
      description: 'Convertendo coordenadas para API do google maps',
    },
    {
      icon: ShieldCheck,
      name: 'Validação de formulário',
      description: 'Validação de formulário',
    },
  ],
};
