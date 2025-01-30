export const getHeaderHeight = (): number => {
  if (typeof window === 'undefined') return 80;
  const header = document.querySelector('header');
  return header?.offsetHeight ?? 80;
};

export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const headerHeight = getHeaderHeight();
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}; 