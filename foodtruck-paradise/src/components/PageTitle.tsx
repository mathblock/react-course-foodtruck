import { useEffect } from 'react';

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  // useEffect pour changer le titre de la page
  useEffect(() => {
    // Sauvegarder le titre original
    const originalTitle = document.title;

    // Changer le titre
    document.title = title;

    // Cleanup : restaurer le titre original quand le composant se démonte
    return () => {
      document.title = originalTitle;
    };
  }, [title]); // Se déclenche quand 'title' change

  return null; // Ne rend rien visuellement
}

export default PageTitle;

