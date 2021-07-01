export const getSpotlightConcourse = () => 
    cy.get('[data-highlights=""]').contains("⭐ Receita Federal")

export const getCoursesTab = () => 
    cy.get(".cur-categories").contains("Cursos")

export const getFilter = () => 
    cy.get(".js-filter")

export const getFilteredCourse = () =>
    cy.get('[data-type="cursos"]')