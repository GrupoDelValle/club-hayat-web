import { useEffect, useState } from 'react';

export const useSectionObserver = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((sectionId) => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(sectionId);
                            }
                        });
                    },
                    { threshold: 0.6 } // Este valor ajusta cuándo una sección se considera "activa"
                );
                observer.observe(sectionElement);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    return activeSection;
};
