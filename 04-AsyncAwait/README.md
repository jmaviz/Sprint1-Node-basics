# COMENTARI

En referència el que em vas comentar a l'anterior correcció d'exercicis:

- N2 E3 correcte, tot i que no sé què és el "?" de la línia 41. Typo?

Et recordo l'exemple:

**const salari = salaries.find( e => e.id === empleat.id)?.salary;**

Aquest "?" check null operator. Es va implementar a les darreres modificacions de ECMAScript 6. 

Si elimines aquest check null operetor del codi i, per exemple, passes una id que no hi existeix si et fixes el programa "peta" i indica un problema d'undefined. El que faria bàsicament es obligar al codi a no petar i forçar a capturar aquest undefined i, per tant, filtrar en un if/else per entra en els seus respectius resolve/reject. Em va semblar més net fer-ho així.

Et deixo l'enllaç que fa referència al que et comento per si t'interesa :smiley:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

